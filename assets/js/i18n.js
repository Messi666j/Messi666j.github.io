/**
 * Bilingual i18n Engine for Haoyu Wang's Robotics Portfolio
 * Inspired by Lain's database, optimized with offline fallback
 */

(() => {
  let langData = null;
  let currentLang = localStorage.getItem('lang') || 'zh'; // Default to Chinese for domestic recruiters

  function getNestedValue(obj, key) {
    if (!obj || !key) return undefined;
    return key.split('.').reduce((acc, part) => acc?.[part], obj);
  }

  function getRootPath() {
    const scripts = document.getElementsByTagName('script');
    for (const script of scripts) {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/js/i18n.js')) {
        return src.replace('assets/js/i18n.js', '');
      }
    }
    return '';
  }

  const rootPath = getRootPath();

  function t(key) {
    return getNestedValue(langData, key) || key;
  }

  function applyTranslation(el, key, value) {
    if (!value || value === key) return;

    if (el instanceof HTMLImageElement) {
      el.setAttribute('alt', value);
      return;
    }

    el.innerHTML = value;
  }

  function updatePageLang() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      applyTranslation(el, key, t(key));
    });

    const toggleBtns = document.querySelectorAll('.lang-toggle');
    toggleBtns.forEach(btn => {
      btn.textContent = currentLang === 'en' ? '中文' : 'English';
    });
  }

  async function loadLang(lang) {
    const url = `${rootPath}lang/${lang}.json?t=${new Date().getTime()}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      langData = await res.json();
      currentLang = lang;
      localStorage.setItem('lang', lang);
      updatePageLang();
      window.dispatchEvent(new CustomEvent('i18nLoaded', { detail: { lang } }));
    } catch (err) {
      console.warn('[i18n] Fetch failed (likely local file:// CORS), using inline fallback', err);
      // Fallback works seamlessly if fetch fails
      updatePageLang();
      window.dispatchEvent(new CustomEvent('i18nLoaded', { detail: { lang } }));
    }
  }

  window.i18n = {
    get: t,
    changeLang: (lang) => {
      if (currentLang === lang && langData) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      loadLang(lang);
    },
    toggleLang: () => {
      const nextLang = currentLang === 'zh' ? 'en' : 'zh';
      window.i18n.changeLang(nextLang);
    },
    currentLang: () => currentLang,
  };

  // Initial load
  loadLang(currentLang);
})();
