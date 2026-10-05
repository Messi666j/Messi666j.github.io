/**
 * Main Interactive Logic for Haoyu Wang's Robotics Portfolio
 * Inspired by VS Code aesthetic & Lain-Ego0's architecture
 */

(() => {
  const PROJECTS = [
    {
      id: 'corridor-lo-mpc',
      subsystemCode: 'SYS_01 // CORRIDOR_LO_MPC',
      img: 'assets/images/corridor_evolution.gif',
      hasGallery: true,
      gallery: [
        { labelZh: '动态演化 (GIF)', labelEn: 'Evolution (GIF)', src: 'assets/images/corridor_evolution.gif' },
        { labelZh: '最终轨迹', labelEn: 'Final Trajectory', src: 'assets/images/corridor_final.png' },
        { labelZh: '安全走廊', labelEn: 'Safe Corridor', src: 'assets/images/corridor_only.png' },
        { labelZh: '编队误差', labelEn: 'Formation Error', src: 'assets/images/corridor_error.png' },
      ],
      specs: [
        { labelZh: '编队跟踪误差', labelEn: 'Tracking Error', val: '< 0.05 m' },
        { labelZh: '控制求解周期', labelEn: 'Solve Period', val: '50 ms' },
        { labelZh: '走廊约束生成', labelEn: 'Constraint Gen', val: '凸走廊凸包' },
      ],
      titleKey: 'projects.item0.title',
      roleKey: 'projects.item0.role',
      descKey: 'projects.item0.desc',
      tags: ['Convex Safe Corridor', 'Minimum Snap', 'LO-MPC', 'CasADi', 'Multi-Robot', 'Python', 'Trajectory Optimization'],
      links: [
        { isDemo: true, targetId: 'corridor-lo-mpc', targetSrc: 'assets/images/corridor_evolution.gif', labelKey: 'projects.links.demo', icon: 'fas fa-play-circle' },
        { href: 'https://github.com/Messi666j/Corridor-LO-MPC', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-book' }
      ]
    },
    {
      id: 'arm-grabbing',
      subsystemCode: 'SYS_02 // ARM_GRABBING_EMBODIED',
      img: 'assets/images/arm_grabbing_arch.svg',
      hasGallery: true,
      gallery: [
        { labelZh: '全栈架构图', labelEn: 'Dual Architecture', src: 'assets/images/arm_grabbing_arch.svg' },
        { labelZh: '具身闭环演示 (GIF)', labelEn: 'Embodied Policy (GIF)', src: 'assets/images/soarm_pusht_demo1.gif' },
        { labelZh: 'DLS IK & 3D轨迹曲线', labelEn: 'Kinematics & 3D Traj', src: 'assets/images/arm_grabbing_kinematics.png' },
        { labelZh: 'MoveIt 2 规划管道', labelEn: 'MoveIt 2 Pipeline', src: 'assets/images/arm_grabbing_moveit.svg' },
        { labelZh: '遥操作采集界面', labelEn: 'Teleoperation GUI', src: 'assets/images/soarm_teleop_gui.png' },
      ],
      specs: [
        { labelZh: 'DLS 逆解残差', labelEn: 'DLS Residual', val: '< 0.1 mm' },
        { labelZh: '自碰撞计算优化', labelEn: 'Collision Query', val: '-85% 耗时' },
        { labelZh: '具身数据集采样', labelEn: 'Dataset Sampling', val: '50 Hz 多视角' },
      ],
      titleKey: 'projects.item1.title',
      roleKey: 'projects.item1.role',
      descKey: 'projects.item1.desc',
      tags: ['ROS 2 Humble', 'Pinocchio', 'DLS IK (<0.1mm)', 'MoveIt 2', 'LeRobot', 'Diffusion Policy', 'ACT', 'MuJoCo', 'STS3215'],
      links: [
        { isDemo: true, targetId: 'arm-grabbing', targetSrc: 'assets/images/soarm_pusht_demo1.gif', labelKey: 'projects.links.demo', icon: 'fas fa-play-circle' },
        { href: 'https://github.com/Messi666j/Arm_Grabbing', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: 'https://github.com/Messi666j/Arm_Grabbing/blob/main/docs/phase2_mastery_guide.md', labelKey: 'projects.links.docs', icon: 'fas fa-book-open' },
        { href: 'https://github.com/Messi666j/Arm_Grabbing/blob/main/docs/nanny_tutorial_and_interview_guide.md', labelKey: 'projects.links.reference', icon: 'fas fa-graduation-cap' }
      ]
    },
    {
      id: 'robocup-rescue-arm',
      subsystemCode: 'SYS_03 // ROBOCUP_RESCUE_ARM',
      img: 'assets/images/robocup_arm_diag.svg',
      hasGallery: false,
      specs: [
        { labelZh: '国家级竞赛荣誉', labelEn: 'National Prize', val: '全国三等奖' },
        { labelZh: '总线通信拓扑', labelEn: 'CAN Topology', val: 'CAN 2.0B 1M' },
        { labelZh: '电机闭环控制', labelEn: 'Motor Control', val: 'M2006 双环PID' },
      ],
      titleKey: 'projects.item2.title',
      roleKey: 'projects.item2.role',
      descKey: 'projects.item2.desc',
      tags: ['RoboCup 3rd Prize', 'STM32', 'CAN Bus', 'Kinematics', 'Quintic Spline', 'M2006 PID', 'FreeRTOS'],
      links: [
        { href: '#timeline', labelKey: 'projects.links.award', icon: 'fas fa-trophy' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-microchip' }
      ]
    },
    {
      id: 'trailblazer-ros2-nav',
      subsystemCode: 'SYS_04 // ROS2_AUTONOMOUS_NAV',
      img: 'assets/images/trailblazer_arch_diag.svg',
      hasGallery: false,
      specs: [
        { labelZh: '激光雷达里程计', labelEn: 'LiDAR Odometry', val: 'FAST-LIO2 6-DOF' },
        { labelZh: '局部避障采样', labelEn: 'Local Avoidance', val: 'MPPI 随机采样' },
        { labelZh: '三维建图系统', labelEn: 'Mapping Field', val: 'ESDF 实时增量' },
      ],
      titleKey: 'projects.item3.title',
      roleKey: 'projects.item3.role',
      descKey: 'projects.item3.desc',
      tags: ['ROS 2 Humble', 'FAST-LIO2', 'ESDF Mapping', 'B-spline', 'MPPI Control', 'Lifecycle Node', 'Gazebo'],
      links: [
        { href: 'https://github.com/Gerrylgr/TrailBlazer_Community', labelKey: 'projects.links.reference', icon: 'fab fa-github' },
        { href: '#documents', labelKey: 'projects.links.docs', icon: 'fas fa-sitemap' }
      ]
    }
  ];

  const DOCUMENTS = [
    {
      rfc: 'RFC-01 // ADVANCED_KINEMATICS',
      titleKey: 'documents.item0.title',
      descKey: 'documents.item0.desc',
      tags: ['Pinocchio', 'DLS IK', 'MoveIt 2', 'Quintic Spline'],
      icon: 'fas fa-robot',
      link: {
        href: 'https://github.com/Messi666j/Arm_Grabbing/blob/main/docs/phase2_mastery_guide.md',
        labelZh: '在线研读讲义',
        labelEn: 'Read Master Guide',
        icon: 'fas fa-arrow-up-right-from-square'
      }
    },
    {
      rfc: 'RFC-02 // EMBODIED_INTERVIEW',
      titleKey: 'documents.item1.title',
      descKey: 'documents.item1.desc',
      tags: ['Interview Guide', 'Sim-to-Real', 'DLS Analysis'],
      icon: 'fas fa-graduation-cap',
      link: {
        href: 'https://github.com/Messi666j/Arm_Grabbing/blob/main/docs/nanny_tutorial_and_interview_guide.md',
        labelZh: '面试题库与代码拆解',
        labelEn: 'Interview Q&A Guide',
        icon: 'fas fa-arrow-up-right-from-square'
      }
    },
    {
      rfc: 'RFC-03 // CAD_URDF_TF2',
      titleKey: 'documents.item2.title',
      descKey: 'documents.item2.desc',
      tags: ['OnShape CAD', 'URDF / Xacro', 'TF2 Tree', 'RViz 2'],
      icon: 'fas fa-cubes',
      link: {
        href: 'https://github.com/Messi666j/Arm_Grabbing/blob/main/docs/phase1_mastery_guide.md',
        labelZh: 'URDF与TF2讲义',
        labelEn: 'URDF & TF2 Guide',
        icon: 'fas fa-arrow-up-right-from-square'
      }
    },
    {
      rfc: 'RFC-04 // CONVEX_CORRIDOR',
      titleKey: 'documents.item3.title',
      descKey: 'documents.item3.desc',
      tags: ['Convex Safe Corridor', 'Minimum Snap', 'LO-MPC', 'CasADi'],
      icon: 'fas fa-draw-polygon',
      link: {
        href: 'https://github.com/Messi666j/Corridor-LO-MPC',
        labelZh: '走廊规划开源仓库',
        labelEn: 'Safe Corridor Repo',
        icon: 'fas fa-arrow-up-right-from-square'
      }
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
      categoryKey: 'skills.manipulator',
      icon: 'fas fa-robot',
      items: [
        'Pinocchio 运动学核心 (正逆运动学 / 雅可比矩阵符号更新)',
        '自研 DLS 阻尼最小二乘法逆解器 (奇异点消除, 残差 < 0.1mm)',
        'MoveIt 2 运动规划管道、SRDF 碰撞矩阵优化与 FollowJointTrajectory 闭环',
        '空间五次多项式平滑插补 (零冲击边界) 与 3D 8字形双扭线轨迹',
        'Hugging Face LeRobot 具身学习框架 (50Hz 多视角高保真数据集)',
        'ACT (Action Chunking) 与 Diffusion Policy 模仿学习策略',
        '主从双臂 (Leader-Follower) 遥操作与 STS3215 串行总线舵机驱动'
      ]
    },
    {
      categoryKey: 'skills.planning',
      icon: 'fas fa-route',
      items: [
        'A* / Hybrid A* 路径搜索与拓扑几何剪枝',
        '凸安全走廊 (Convex Safe Corridor) 凸多面体硬约束集',
        'Minimum Snap 连续轨迹优化与非凸走廊映射',
        'B-spline 样条曲线轨迹优化与时间分配',
        '多智能体编队避障硬约束与密集窄道通行'
      ]
    },
    {
      categoryKey: 'skills.control',
      icon: 'fas fa-compass',
      items: [
        '词典序模型预测控制 (LO-MPC) 多目标分层优化',
        'CasADi / CVXPY / OSQP 优化建模与 50ms 快速求解',
        'MPPI (模型预测路径积分) 随机采样高动态避障',
        '数字 PID 闭环控制 (位置-速度-电流三环调谐与前馈)',
        'MuJoCo / Gazebo 高保真刚体动力学物理仿真'
      ]
    },
    {
      categoryKey: 'skills.embedded',
      icon: 'fas fa-microchip',
      items: [
        'STM32 (Cortex-M4) 底层固件与外设硬件驱动开发',
        'FreeRTOS 实时多任务操作系统调度与队列同步',
        'CAN 总线协议 (CAN 2.0B / CANopen) 拓扑通信与过滤',
        'STS3215 串行总线舵机 1Mbps 半双工差分通信协议',
        '大疆 M2006 / M3508 无刷电机与伺服驱动器闭环调优'
      ]
    },
    {
      categoryKey: 'skills.languages',
      icon: 'fas fa-code',
      items: [
        'C/C++ (C++11/14/17, STL, 面向对象, 模板与指针管理)',
        'Python (PyTorch, Pinocchio, NumPy, CasADi, Matplotlib)',
        'ROS 2 (Humble) / Nav2 / TF2 动态坐标变换系统',
        'URDF / Xacro 参数化描述与真实 CAD 物理惯量标定',
        'Linux / Ubuntu 环境, CMake 构建系统与 Git 版本协同'
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
      const isGifInitial = proj.img && proj.img.endsWith('.gif');
      const mediaHtml = proj.img
        ? `<div class="project-media">
             <div class="project-media-wrapper" data-target="img-${proj.id}">
               <div id="badge-${proj.id}" class="media-live-badge ${isGifInitial ? '' : 'hidden'}">
                 <span class="live-dot"></span> <span class="live-text">${currentLang === 'en' ? 'LIVE DEMO' : '动态演示'}</span>
               </div>
               <div class="media-zoom-hint"><i class="fas fa-search-plus"></i> ${currentLang === 'en' ? 'Click to zoom' : '点击放大'}</div>
               <img id="img-${proj.id}" src="${proj.img}" alt="${t(proj.titleKey)}" loading="lazy">
             </div>
             ${proj.hasGallery ? `
               <div class="gallery-tabs">
                 ${proj.gallery.map((g, gIdx) => `
                   <button class="gallery-tab-btn ${gIdx === 0 ? 'active' : ''}" data-target="img-${proj.id}" data-src="${g.src}" data-proj="${proj.id}">
                     ${currentLang === 'en' ? g.labelEn : g.labelZh}
                   </button>
                 `).join('')}
               </div>
             ` : ''}
           </div>`
        : `<div class="project-media">
             <div class="arch-diagram-box">
               <i class="fas fa-robot" style="font-size: 3.5rem; color: var(--primary); margin-bottom: 1rem;"></i>
               <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 0.5rem;">${t(proj.titleKey)}</h4>
             </div>
           </div>`;

      const tagsHtml = proj.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
      const linksHtml = proj.links.map(link => {
        if (link.isDemo) {
          return `
            <button class="btn btn-sm btn-demo demo-trigger" data-target="img-${link.targetId}" data-src="${link.targetSrc}" data-proj="${link.targetId}">
              <i class="${link.icon}"></i> <span>${t(link.labelKey)}</span>
            </button>
          `;
        }
        return `
          <a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-sm btn-secondary">
            <i class="${link.icon}"></i> <span>${t(link.labelKey)}</span>
          </a>
        `;
      }).join('');

      const specsHtml = proj.specs ? `
        <div class="project-specs-grid">
          ${proj.specs.map(s => `
            <div class="spec-item">
              <span class="spec-label">${currentLang === 'en' ? s.labelEn : s.labelZh}</span>
              <span class="spec-val">${s.val}</span>
            </div>
          `).join('')}
        </div>
      ` : '';

      return `
        <article class="project-card">
          <div class="project-card-header">
            <div class="card-header-left">
              <span class="status-indicator"></span>
              <span class="header-code">${proj.subsystemCode}</span>
            </div>
            <div class="card-header-right">
              <span class="project-role-badge">${t(proj.roleKey)}</span>
            </div>
          </div>
          <div class="project-card-body ${isReverse}">
            ${mediaHtml}
            <div class="project-info">
              <h3 class="project-title">${t(proj.titleKey)}</h3>
              <div class="project-tags">${tagsHtml}</div>
              <p class="project-desc">${t(proj.descKey)}</p>
              ${specsHtml}
              <div class="project-links">${linksHtml}</div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Gallery Switching Listeners with smooth animation and badge sync
    document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.gallery-tabs');
        parent.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetImgId = btn.getAttribute('data-target');
        const newSrc = btn.getAttribute('data-src');
        const projId = btn.getAttribute('data-proj');
        const img = document.getElementById(targetImgId);
        const badge = document.getElementById(`badge-${projId}`);

        if (badge) {
          if (newSrc.endsWith('.gif')) {
            badge.classList.remove('hidden');
          } else {
            badge.classList.add('hidden');
          }
        }

        if (img) {
          img.style.opacity = '0.3';
          img.style.transform = 'scale(0.98)';
          setTimeout(() => {
            img.src = newSrc;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
          }, 150);
        }
      });
    });

    // Attach Demo Trigger button listeners
    document.querySelectorAll('.demo-trigger').forEach(demoBtn => {
      demoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetImgId = demoBtn.getAttribute('data-target');
        const targetSrc = demoBtn.getAttribute('data-src');
        const projId = demoBtn.getAttribute('data-proj');

        // Find the matching gallery tab button and trigger it
        const tabBtn = document.querySelector(`.gallery-tab-btn[data-target="${targetImgId}"][data-src="${targetSrc}"]`);
        if (tabBtn) {
          tabBtn.click();
        }

        // Smooth scroll to the media preview
        const img = document.getElementById(targetImgId);
        if (img) {
          img.closest('.project-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    // Attach Lightbox Modal click listeners on media
    document.querySelectorAll('.project-media-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const img = wrapper.querySelector('img');
        if (img && img.src) {
          openMediaModal(img.src, img.alt);
        }
      });
    });
  }

  function openMediaModal(src, captionText) {
    const modal = document.getElementById('media-modal');
    const modalImg = document.getElementById('media-modal-img');
    const caption = document.querySelector('.media-modal-caption');
    if (!modal || !modalImg) return;

    modalImg.src = src;
    if (caption) caption.textContent = captionText || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeMediaModal() {
    const modal = document.getElementById('media-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initMediaModal() {
    const modal = document.getElementById('media-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.media-modal-close');
    const backdrop = modal.querySelector('.media-modal-backdrop');

    closeBtn?.addEventListener('click', closeMediaModal);
    backdrop?.addEventListener('click', closeMediaModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeMediaModal();
      }
    });
  }

  function renderDocuments() {
    const container = document.querySelector('.documents-grid');
    if (!container) return;
    const t = window.i18n ? window.i18n.get : (k) => k;
    const currentLang = window.i18n ? window.i18n.currentLang() : 'zh';

    container.innerHTML = DOCUMENTS.map((doc) => {
      const linkLabel = doc.link ? (currentLang === 'en' ? doc.link.labelEn : doc.link.labelZh) : '';
      const linkHtml = doc.link ? `
        <div class="doc-actions" style="margin-top: 1rem;">
          <a href="${doc.link.href}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-primary">
            <i class="${doc.link.icon}"></i> ${linkLabel}
          </a>
        </div>
      ` : '';

      return `
        <div class="doc-card">
          <div class="doc-header-strip">
            <span class="doc-rfc">${doc.rfc}</span>
            <span class="doc-tech-badge"><i class="${doc.icon}"></i> SPEC</span>
          </div>
          <div class="doc-body">
            <h4 class="doc-title">${t(doc.titleKey)}</h4>
            <p class="doc-desc">${t(doc.descKey)}</p>
            <div class="doc-tags">
              ${doc.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            ${linkHtml}
          </div>
        </div>
      `;
    }).join('');
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

  // Theme Toggle Functionality with smooth visual icon rotation
  function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
      });
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
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
    initMediaModal();
    renderAll();
  });
})();
