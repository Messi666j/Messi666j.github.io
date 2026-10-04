/**
 * Main Interactive Logic for Haoyu Wang's Robotics Portfolio
 * Inspired by VS Code aesthetic & Lain-Ego0's architecture
 */

(() => {
  const PROJECTS = [
    {
      id: 'corridor-lo-mpc',
      img: 'assets/images/corridor_final.png',
      hasGallery: true,
      gallery: [
        { labelZh: '最终轨迹', labelEn: 'Final Trajectory', src: 'assets/images/corridor_final.png' },
        { labelZh: '阶段演化', labelEn: 'Stages Evolution', src: 'assets/images/corridor_stages.png' },
        { labelZh: '安全走廊', labelEn: 'Safe Corridor', src: 'assets/images/corridor_only.png' },
        { labelZh: '编队误差', labelEn: 'Formation Error', src: 'assets/images/corridor_error.png' },
      ],
      titleKey: 'projects.item0.title',
      roleKey: 'projects.item0.role',
      descKey: 'projects.item0.desc',
      tags: ['Convex Safe Corridor', 'Minimum Snap', 'LO-MPC', 'CasADi', 'Multi-Robot', 'Python', 'Trajectory Optimization'],
      links: [
        { href: 'https://github.com/Messi666j/Corridor-LO-MPC', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-book' }
      ]
    },
    {
      id: 'robocup-rescue-arm',
      img: 'assets/images/robocup_arm_diag.svg',
      hasGallery: false,
      titleKey: 'projects.item1.title',
      roleKey: 'projects.item1.role',
      descKey: 'projects.item1.desc',
      tags: ['RoboCup 3rd Prize', 'STM32', 'CAN Bus', 'Kinematics', 'Quintic Spline', 'M2006 PID', 'FreeRTOS'],
      links: [
        { href: '#timeline', labelKey: 'projects.links.award', icon: 'fas fa-trophy' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-microchip' }
      ]
    },
    {
      id: 'trailblazer-ros2-nav',
      img: 'assets/images/trailblazer_arch_diag.svg',
      hasGallery: false,
      titleKey: 'projects.item2.title',
      roleKey: 'projects.item2.role',
      descKey: 'projects.item2.desc',
      tags: ['ROS 2 Humble', 'FAST-LIO2', 'ESDF Mapping', 'B-spline', 'MPPI Control', 'Lifecycle Node', 'Gazebo'],
      links: [
        { href: 'https://github.com/Gerrylgr/TrailBlazer_Community', labelKey: 'projects.links.reference', icon: 'fab fa-github' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-sitemap' }
      ]
    },
    {
      id: 'manipulator-advanced-control',
      img: null,
      iconPlaceholder: 'fas fa-robot',
      hasGallery: false,
      titleKey: 'projects.item3.title',
      roleKey: 'projects.item3.role',
      descKey: 'projects.item3.desc',
      tags: ['MoveIt 2', 'Pinocchio', 'Lagrangian Dynamics', 'Computed Torque', 'Impedance Control', 'Cartesian Trajectory'],
      links: [
        { href: '#skills', labelKey: 'projects.links.docs', icon: 'fas fa-brain' }
      ]
    }
  ];

  const DOCUMENTS = [
    {
      titleKey: 'documents.item0.title',
      descKey: 'documents.item0.desc',
      tags: ['Safe Corridor', 'QP Solver', 'Convex Optimization'],
      icon: 'fas fa-draw-polygon'
    },
    {
      titleKey: 'documents.item1.title',
      descKey: 'documents.item1.desc',
      tags: ['LO-MPC', 'CasADi', 'Multi-Agent Formation'],
      icon: 'fas fa-project-diagram'
    },
    {
      titleKey: 'documents.item2.title',
      descKey: 'documents.item2.desc',
      tags: ['Analytical IK', 'Quintic Polynomial', 'Robotic Arm'],
      icon: 'fas fa-robot'
    },
    {
      titleKey: 'documents.item3.title',
      descKey: 'documents.item3.desc',
      tags: ['ROS 2', 'Lifecycle Node', 'Pluginlib'],
      icon: 'fas fa-cubes'
    }
  ];

  const TIMELINE_EVENTS = [
    'timeline.event0',
    'timeline.event1',
    'timeline.event2',
    'timeline.event3',
    'timeline.event4',
    'timeline.event5',
    'timeline.event6',
    'timeline.event7'
  ];

  const TECH_STACK = [
    {
      categoryKey: 'skills.planning',
      icon: 'fas fa-route',
      items: [
        'A* / Hybrid A* 路径搜索与拓扑剪枝',
        '凸安全走廊 (Convex Safe Corridor)',
        'Minimum Snap 高阶连续轨迹优化',
        'B-spline 样条曲线轨迹优化',
        '多项式时间分配与非凸避障'
      ]
    },
    {
      categoryKey: 'skills.control',
      icon: 'fas fa-compass',
      items: [
        '词典序模型预测控制 (LO-MPC)',
        'CasADi / CVXPY QP/NLP 优化建模',
        'MPPI (模型预测路径积分) 局部控制',
        '多自由度串联机械臂正逆运动学 (DH)',
        '数字 PID 闭环控制 (位置-速度-电流)'
      ]
    },
    {
      categoryKey: 'skills.middleware',
      icon: 'fas fa-network-wired',
      items: [
        'ROS / ROS 2 (Humble) 通信与架构',
        'Lifecycle Node 生命周期节点管理',
        'Pluginlib 动态插件热插拔解耦',
        'TF2 空间变换与 URDF 建模',
        'Gazebo 仿真与 RViz 调试'
      ]
    },
    {
      categoryKey: 'skills.embedded',
      icon: 'fas fa-microchip',
      items: [
        'STM32 (Cortex-M4) 底层固件开发',
        'FreeRTOS 实时多任务系统调度',
        'CAN 总线协议 (CAN 2.0B / CANopen)',
        'USART / SPI / I2C / PWM 协议',
        'DJI M2006 无刷电机与伺服驱动'
      ]
    },
    {
      categoryKey: 'skills.languages',
      icon: 'fas fa-code',
      items: [
        'C/C++ (C++11/14, STL, 面向对象)',
        'Python (NumPy, SciPy, CasADi)',
        'Linux / Ubuntu 生产开发环境',
        'CMake 构建体系 / Git 版本控制',
        'GDB / 逻辑分析仪 / 示波器联合调试'
      ]
    }
  ];

  function renderProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container) return;
    const t = window.i18n ? window.i18n.get : (k) => k;
    const currentLang = window.i18n ? window.i18n.currentLang() : 'zh';

    container.innerHTML = PROJECTS.map((proj, idx) => {
      const isReverse = idx % 2 === 1 ? 'reverse' : '';
      const mediaHtml = proj.img
        ? `<div class="project-media">
             <img id="img-${proj.id}" src="${proj.img}" alt="${t(proj.titleKey)}" loading="lazy">
             ${proj.hasGallery ? `
               <div class="gallery-tabs">
                 ${proj.gallery.map((g, gIdx) => `
                   <button class="gallery-tab-btn ${gIdx === 0 ? 'active' : ''}" data-target="img-${proj.id}" data-src="${g.src}">
                     ${currentLang === 'en' ? g.labelEn : g.labelZh}
                   </button>
                 `).join('')}
               </div>
             ` : ''}
           </div>`
        : `<div class="project-media">
             <div class="arch-diagram-box">
               <i class="${proj.iconPlaceholder}" style="font-size: 3.5rem; color: var(--primary); margin-bottom: 1rem;"></i>
               <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 0.5rem;">${t(proj.titleKey)}</h4>
               <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; max-width: 320px;">
                 Kinematics, Lagrangian Dynamics &amp; Impedance Force Control
               </p>
             </div>
           </div>`;

      const tagsHtml = proj.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
      const linksHtml = proj.links.map(link => `
        <a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank"' : ''} class="btn btn-sm btn-secondary">
          <i class="${link.icon}"></i> ${t(link.labelKey)}
        </a>
      `).join('');

      return `
        <article class="project-card ${isReverse}">
          ${mediaHtml}
          <div class="project-info">
            <div class="project-meta">
              <span class="project-role-badge">${t(proj.roleKey)}</span>
            </div>
            <h3 class="project-title">${t(proj.titleKey)}</h3>
            <div class="project-tags">${tagsHtml}</div>
            <p class="project-desc">${t(proj.descKey)}</p>
            <div class="project-links">${linksHtml}</div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Gallery Switching Listeners
    document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parent = btn.closest('.gallery-tabs');
        parent.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetImgId = btn.getAttribute('data-target');
        const newSrc = btn.getAttribute('data-src');
        const img = document.getElementById(targetImgId);
        if (img) {
          img.style.opacity = '0.3';
          setTimeout(() => {
            img.src = newSrc;
            img.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  function renderDocuments() {
    const container = document.querySelector('.documents-grid');
    if (!container) return;
    const t = window.i18n ? window.i18n.get : (k) => k;

    container.innerHTML = DOCUMENTS.map((doc, idx) => `
      <div class="doc-card">
        <div class="doc-icon"><i class="${doc.icon}"></i></div>
        <div class="doc-content">
          <h4 class="doc-title">${t(doc.titleKey)}</h4>
          <p class="doc-desc">${t(doc.descKey)}</p>
          <div class="doc-tags">
            ${doc.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderTimeline() {
    const container = document.querySelector('.timeline');
    if (!container) return;
    const t = window.i18n ? window.i18n.get : (k) => k;

    container.innerHTML = TIMELINE_EVENTS.map(eventKey => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">${t(`${eventKey}.date`)}</div>
          <h3 class="timeline-title">${t(`${eventKey}.title`)}</h3>
          <p class="timeline-desc">${t(`${eventKey}.desc`)}</p>
        </div>
      </div>
    `).join('');
  }

  function renderSkills() {
    const container = document.querySelector('.skills-grid');
    if (!container) return;
    const t = window.i18n ? window.i18n.get : (k) => k;

    container.innerHTML = TECH_STACK.map(stack => `
      <div class="skill-card">
        <div class="skill-icon"><i class="${stack.icon}"></i></div>
        <h3>${t(stack.categoryKey)}</h3>
        <ul class="skill-list">
          ${stack.items.map(item => `
            <li><i class="fas fa-check"></i> ${item}</li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  function renderAll() {
    renderProjects();
    renderDocuments();
    renderTimeline();
    renderSkills();
  }

  // Theme Toggle Functionality
  function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }
  }

  // Language Toggle Functionality
  function initLangToggle() {
    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.i18n) {
          window.i18n.toggleLang();
        }
      });
    });
  }

  // Listen for i18n loaded event to re-render dynamic content
  window.addEventListener('i18nLoaded', () => {
    renderAll();
  });

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLangToggle();
    renderAll();
  });
})();
