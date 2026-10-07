/**
 * Bilingual i18n Engine for FreeMe's Robotics Portfolio
 * Inspired by Lain's database, optimized with embedded synchronous fallback
 */

(() => {
  // Embedded fallback dictionaries ensure ZERO flicker of raw translation keys
  // even on file:// protocol (CORS restriction), network latency, or CDN cache issues.
  const FALLBACK_ZH = {
  "nav": {
    "home": "首页",
    "projects": "核心项目",
    "documents": "技术文档",
    "timeline": "时间线",
    "skills": "技能栈",
    "contact": "联系方式"
  },
  "intro": {
    "avatarAlt": "FreeMe的头像",
    "title": "你好，我是 FreeMe",
    "kicker": "机器人运动规划与控制 / 机械臂具身操作工程师",
    "desc": "西安交通大学 (985) · 自动化专业工学学士 (2022.09 - 2026.06)<br>聚焦机械臂全栈运控 (Pinocchio / MoveIt 2)、具身智能 (LeRobot / ACT / Diffusion Policy)、多智能体凸安全走廊规划与嵌入式软硬件研发",
    "status": "2026届求职中 · 意向: 机器人规划控制 / 机械臂算法工程师(具身智能) · 期望: 12-15K",
    "spec0Label": "DLS 逆解残差",
    "spec0Value": "< 0.1 mm",
    "spec1Label": "MoveIt 2 闭环",
    "spec1Value": "50 Hz Action",
    "spec2Label": "具身学习策略",
    "spec2Value": "LeRobot / ACT",
    "spec3Label": "全国竞技荣誉",
    "spec3Value": "RoboCup 3rd"
  },
  "projects": {
    "title": "核心研发与工程项目",
    "imgAlt": "项目展示图",
    "links": {
      "code": "源码仓库",
      "docs": "技术文档",
      "demo": "动态演示 (Demo)",
      "website": "项目主页",
      "paper": "毕业论文",
      "award": "获奖荣誉",
      "zhihu": "知乎专栏",
      "reference": "参考项目"
    },
    "item0": {
      "title": "基于凸安全走廊与 LO-MPC 的多移动机器人协同运动规划",
      "role": "毕业设计 · 独立研发 (2025.12 - 2026.06)",
      "desc": "面向密集障碍物环境下多智能体协同通行与避障难题，从零设计并实现了从栅格安全膨胀、A*路径拓扑剪枝、凸安全走廊生成、Minimum Snap连续轨迹优化，到 CasADi 词典序模型预测控制 (LO-MPC) 的全套运动规划流水线。在密集狭窄走廊中实现编队跟踪误差 < 0.05m，控制周期 50ms。",
      "tags": [
        "Convex Safe Corridor",
        "Minimum Snap",
        "LO-MPC",
        "CasADi",
        "Multi-Robot",
        "Python",
        "Trajectory Optimization"
      ]
    },
    "item1": {
      "title": "Arm_Grabbing: SO-ARM101 机械臂混合控制与具身智能全栈系统",
      "role": "全栈研发 · 仿真验证至实机部署 (2025.08 - 2026.03)",
      "desc": "基于开源桌面 6 轴机械臂 SO-ARM101 / SO-100M，构建从传统 Model-Based 动力学与运动学控制底座到具身智能 Learning-Based 模仿学习策略的完整全栈抓取系统。<br><b>【Model-Based 规划控制】</b>基于 OnShape CAD 导出 13 个构件构建参数化 URDF/Xacro 与高精度物理惯量；采用 Pinocchio 求解正逆运动学，自主推导阻尼最小二乘法 (DLS IK) 求解器，引入 λ² 阻尼约束彻底消除奇异点速度爆炸，笛卡尔空间末端跟踪残差 < 0.1mm；设计空间五次多项式平滑插值与 3D 8字形 (Lemniscate) 空间轨迹，结合 Yoshikawa 操纵度指标量化避障；配置 MoveIt 2 运动规划管道，精细优化 SRDF 碰撞矩阵 (自碰撞计算耗时降低 85%)，通过 FollowJointTrajectory Action 实现 50Hz 闭环控制。<br><b>【Learning-Based 具身策略】</b>底层编写 STS3215 串行总线舵机驱动，搭建主从双臂 (Leader-Follower) 遥操作实时采集链路；基于 Hugging Face LeRobot 构建 50Hz 多视角高保真标准化数据集并开源；部署 ACT 与 Diffusion Policy 策略模型，完成 MuJoCo 物理仿真与实机抓取操作端到端实时推理闭环。",
      "tags": [
        "ROS 2 Humble",
        "Pinocchio",
        "DLS IK (<0.1mm)",
        "MoveIt 2",
        "LeRobot",
        "Diffusion Policy",
        "ACT",
        "MuJoCo",
        "STS3215"
      ]
    },
    "item2": {
      "title": "2025 RoboCup 救援机器人电控系统与机械臂协同控制",
      "role": "主力电控 · 核心研发 (2024.12 - 2025.05)",
      "desc": "面向复杂废墟搜救场景，负责研发移动底盘与机械臂协同作业的核心电控系统。打通上位机 Linux/ROS 与 STM32 下位机高可靠 CAN 总线双向链路；主导多自由度串联机械臂几何/解析正逆运动学解算与五次多项式平滑插补；完成大疆 M2006 无刷电机位置-速度双闭环 PID 调优与里程计协同。助力团队斩获 2025 RoboCup 机器人中国赛全国三等奖。",
      "tags": [
        "RoboCup国家三等奖",
        "STM32",
        "CAN Bus",
        "Kinematics",
        "Quintic Spline",
        "M2006 PID",
        "FreeRTOS"
      ]
    },
    "item3": {
      "title": "基于 ROS 2 的移动机器人激光SLAM与自主导航系统",
      "role": "自主导航研发 · 开源复现 (2025.06 - 2025.11)",
      "desc": "参考 Nav2 规范与 TrailBlazer 分层思想，基于 ROS 2 (Humble) 与 Gazebo 搭建自主移动机器人仿真平台。采用 Server-Plugin-Lifecycle 架构解耦通信与算法；集成 FAST-LIO2 紧耦合激光雷达-IMU 6-DOF 里程计；部署局部点云 PCA 地面分割与三维 ESDF 实时增量场；全局层采用 B-spline 轨迹平滑，局部控制层接入 MPPI 随机采样控制算法实现高动态避障。",
      "tags": [
        "ROS 2 Humble",
        "FAST-LIO2",
        "ESDF Mapping",
        "B-spline",
        "MPPI Control",
        "Lifecycle Node",
        "Gazebo"
      ]
    }
  },
  "documents": {
    "title": "技术文档与知识沉淀",
    "desc": "机械臂具身操作、运动规划算法推导与工程实战总结（持续沉淀于 GitHub）",
    "item0": {
      "title": "机械臂运动学算法、MoveIt 2 与轨迹规划精通指南 (进阶讲义)",
      "desc": "基于 Pinocchio 深度推导齐次矩阵连乘、阻尼最小二乘法 (DLS IK) 奇异点正则化求解、Yoshikawa 操纵度指标、五次样条平滑插值以及 MoveIt 2 运动规划管道底层实现与自测解答。"
    },
    "item1": {
      "title": "机械臂全栈开发：保姆级实战教程与面试官必问硬核指南",
      "desc": "遵循“先纯仿真验证算法 ➔ 后实物部署与 Sim2Real”的工业级标准流程，逐行拆解 DLS 梯度迭代求解、奇异点速度爆炸根源及 MoveIt 2 架构高频面试核心考点。"
    },
    "item2": {
      "title": "SO-ARM101 真实 CAD URDF 建模与 ROS 2 TF2 坐标树精通指南",
      "desc": "拆解从 OnShape 导出 13 个 3D 打印构件到 Xacro 参数化宏、物理惯量矩阵标定、RViz 2 50Hz 实时变换及 TF 树广播机制的全套工程经验。"
    },
    "item3": {
      "title": "凸安全走廊 (Convex Safe Corridor) 凸多面体生成算法与拓扑路径剪枝解析",
      "desc": "详解如何从二维/三维栅格障碍环境中利用射线膨胀与半平面交构建连续凸多边形/多面体硬约束集，供下层 QP 优化器毫秒级求解。"
    }
  },
  "timeline": {
    "title": "教育背景与里程碑",
    "desc": "笃行致远，保持对机器人算法与工程落地的高标准自我驱动",
    "event0": {
      "date": "2022.09 - 2026.06",
      "title": "西安交通大学 (985 / 双一流) · 自动化专业 (工学学士)",
      "desc": "本科综合 GPA: 3.45/4.0；大学英语六级 CET-6: 604分，四级 CET-4: 608分。具备扎实的控制理论、运筹优化及微机底层基础。"
    },
    "event1": {
      "date": "2025.12 - 2026.06",
      "title": "本科毕业设计：基于凸安全走廊与 LO-MPC 的多移动机器人运动规划",
      "desc": "独立搭建基于 Python 与 CasADi 的运动规划仿真系统，完成 A* 剪枝、走廊生成、Minimum Snap 与词典序 MPC 编队控制。"
    },
    "event2": {
      "date": "2025.08 - 2026.03",
      "title": "Arm_Grabbing 机械臂混合控制与具身模仿学习全栈研发",
      "desc": "完成 SO-ARM101 CAD 建模、Pinocchio DLS 逆运动学算法、MoveIt 2 规划配置、主从遥操作与 LeRobot Diffusion Policy 策略训练部署。"
    },
    "event3": {
      "date": "2025.05",
      "title": "2025 RoboCup 机器人中国赛 · 全国三等奖 (主力电控)",
      "desc": "负责救援机器人全机 CAN 总线拓扑、底盘 M2006 无刷电机双闭环 PID 与多自由度机械臂正逆运动学及平滑抓取控制。"
    },
    "event4": {
      "date": "2025.04",
      "title": "工程实践与创新能力大赛（工创赛）· 西安交通大学校赛银牌",
      "desc": "主导自主巡航小车电控与底盘运动控制算法编写。"
    },
    "event5": {
      "date": "2024.04",
      "title": "美国大学生数学建模竞赛 (MCM) · Honorable Mention (H奖)",
      "desc": "负责数学模型建立与数值优化推导，全英文撰写学术竞赛报告。"
    },
    "event6": {
      "date": "2023.11",
      "title": "全国大学生数学建模竞赛 · 陕西省一等奖 & 国家励志奖学金",
      "desc": "扎实的算法建模与运筹优化推导功底，荣获国家级奖学金与省级一等奖。"
    },
    "event7": {
      "date": "2022.10",
      "title": "西安交通大学校级足球联赛“新生杯” · 冠军主力",
      "desc": "随队荣获校新生杯足球赛冠军，具备良好的团队抗压凝聚力与坚韧品质。"
    }
  },
  "skills": {
    "title": "专业技能矩阵",
    "desc": "系统化的机器人规划控制、机械臂具身操作与嵌入式底层开发栈",
    "manipulator": "机械臂与具身智能",
    "planning": "路径规划与轨迹优化",
    "control": "运动控制与运筹优化",
    "embedded": "嵌入式软硬件底层",
    "languages": "编程语言与工具链"
  },
  "footer": {
    "copy": "FreeMe · 机器人规划控制 / 机械臂算法工程师 (具身智能)",
    "credit": "Inspired by VS Code & Lain's database · Hosted on GitHub Pages"
  }
};

  const FALLBACK_EN = {
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "documents": "Docs",
    "timeline": "Timeline",
    "skills": "Stack",
    "contact": "Contact"
  },
  "intro": {
    "avatarAlt": "FreeMe's Avatar",
    "title": "Hello, I'm FreeMe",
    "kicker": "ROBOTICS PLANNING & CONTROL // EMBODIED MANIPULATION",
    "desc": "Xi'an Jiaotong University (985) · B.S. in Automation (2022.09 - 2026.06)<br>Focused on Full-Stack Manipulator Control (Pinocchio / MoveIt 2), Embodied AI (LeRobot / ACT / Diffusion Policy), Multi-Agent Safe Corridor Planning & Embedded Hardware",
    "status": "Class of 2026 · Seeking: Robotics Planning & Control / Manipulator Algorithm Engineer (Embodied AI) · Expected: 12-15K",
    "spec0Label": "DLS IK Residual",
    "spec0Value": "< 0.1 mm",
    "spec1Label": "MoveIt 2 Loop",
    "spec1Value": "50 Hz Action",
    "spec2Label": "Embodied Policy",
    "spec2Value": "LeRobot / ACT",
    "spec3Label": "National Award",
    "spec3Value": "RoboCup 3rd"
  },
  "projects": {
    "title": "Featured Engineering Projects",
    "imgAlt": "Project Media Preview",
    "links": {
      "code": "Repository",
      "docs": "Documentation",
      "demo": "Live Demo",
      "website": "Homepage",
      "paper": "Thesis Paper",
      "award": "Award",
      "zhihu": "Zhihu Column",
      "reference": "Reference"
    },
    "item0": {
      "title": "Convex Safe Corridor & LO-MPC Multi-Robot Motion Planning",
      "role": "Undergraduate Thesis · Independent R&D (2025.12 - 2026.06)",
      "desc": "Targeting multi-robot coordination and obstacle avoidance in dense environments, designed a full-stack motion planning pipeline from 2D safe inflation, modified A* topological pruning, convex safe corridor polygon construction, minimum snap continuous trajectory optimization, to CasADi lexicographic MPC. Formation tracking error < 0.05m with a 50ms control loop.",
      "tags": [
        "Convex Safe Corridor",
        "Minimum Snap",
        "LO-MPC",
        "CasADi",
        "Multi-Robot",
        "Python",
        "Trajectory Optimization"
      ]
    },
    "item1": {
      "title": "Arm_Grabbing: SO-ARM101 Hybrid Control & Embodied AI System",
      "role": "Full-Stack R&D · Simulation to Real Deployment (2025.08 - 2026.03)",
      "desc": "Built an open-source 6-DOF robotic arm manipulation platform (SO-ARM101 / SO-100M) bridging traditional Model-Based kinematics/dynamics control foundations with Learning-Based embodied imitation learning strategies.<br><b>【Model-Based Planning & Control】</b>Exported 13 CAD components via OnShape to construct parameterized URDF/Xacro models with verified physical inertia; formulated forward/inverse kinematics using Pinocchio, deriving a Damped Least Squares (DLS IK) numerical solver with λ² damping regularization to eliminate kinematic singularities, achieving Cartesian tracking error &lt; 0.1mm; implemented quintic polynomial smooth interpolation, 3D lemniscate (figure-8) trajectory planning, and Yoshikawa manipulability optimization; configured the MoveIt 2 planning pipeline, optimizing the SRDF collision matrix (-85% self-collision check latency), and executing closed-loop 50Hz control via FollowJointTrajectory action.<br><b>【Learning-Based Embodied Policy】</b>Implemented STS3215 serial bus servo drivers to establish a master-slave (Leader-Follower) teleoperation streaming pipeline; collected standardized 50Hz multi-view datasets via Hugging Face LeRobot and released them open-source; deployed ACT and Diffusion Policy models for tabletop manipulation, closing the loop from MuJoCo physics simulation to physical hardware execution.",
      "tags": [
        "ROS 2 Humble",
        "Pinocchio",
        "DLS IK (<0.1mm)",
        "MoveIt 2",
        "LeRobot",
        "Diffusion Policy",
        "ACT",
        "MuJoCo",
        "STS3215"
      ]
    },
    "item2": {
      "title": "2025 RoboCup Rescue Robot Control & Multi-DOF Arm Manipulation",
      "role": "Lead Embedded Dev · Core R&D (2024.12 - 2025.05)",
      "desc": "Engineered the embedded control and manipulation stack for an urban search & rescue robot. Built bi-directional CAN communication linking upper Linux/ROS and lower STM32 MCU; solved multi-DOF arm analytical forward/inverse kinematics with joint constraints; designed 5th-order quintic polynomial smooth trajectories; tuned DJI M2006 BLDC cascade PID loops. Awarded 3rd Prize Nationally in RoboCup China Open 2025.",
      "tags": [
        "RoboCup National 3rd",
        "STM32",
        "CAN Bus",
        "Kinematics",
        "Quintic Spline",
        "M2006 PID",
        "FreeRTOS"
      ]
    },
    "item3": {
      "title": "LiDAR-IMU SLAM & MPPI Autonomous Navigation Stack in ROS 2",
      "role": "Autonomy R&D · Open-Source Reproduction (2025.06 - 2025.11)",
      "desc": "Engineered a modular ROS 2 (Humble) & Gazebo autonomy stack inspired by Nav2 and TrailBlazer. Leveraged Server-Plugin-Lifecycle architecture with Pluginlib dynamic plugin loading; integrated FAST-LIO2 tightly-coupled LiDAR-IMU 6-DOF odometry; deployed pointcloud PCA ground filter and incremental 3D ESDF cost field; planned B-spline global paths and executed high-dynamic local collision avoidance via MPPI controller.",
      "tags": [
        "ROS 2 Humble",
        "FAST-LIO2",
        "ESDF Mapping",
        "B-spline",
        "MPPI Control",
        "Lifecycle Node",
        "Gazebo"
      ]
    }
  },
  "documents": {
    "title": "Technical Notes & Knowledge Base",
    "desc": "Manipulator control algorithms, MoveIt 2 architecture, and practical engineering insights",
    "item0": {
      "title": "Manipulator Kinematics, MoveIt 2 & Trajectory Planning Mastery Guide",
      "desc": "Mathematical derivation of homogeneous matrix multiplication, Damped Least Squares (DLS IK) singularity regularization, Yoshikawa manipulability, quintic polynomial interpolation, and MoveIt 2 planning pipeline internals."
    },
    "item1": {
      "title": "Full-Stack Robotic Arm Development: Step-by-Step & Interview Q&A Guide",
      "desc": "Standard industrial workflow from pure simulation verification to real-world deployment (Sim-to-Real), code-level breakdown of DLS numerical iteration, and frequent technical interview questions."
    },
    "item2": {
      "title": "SO-ARM101 CAD URDF Modeling & ROS 2 TF2 Dynamic Transform Tree Guide",
      "desc": "Complete engineering guide from exporting 13 OnShape 3D meshes, Xacro parametric macros, inertia matrix calibration, to RViz 2 50Hz dynamic TF tree broadcasting."
    },
    "item3": {
      "title": "Convex Safe Corridor Construction & Topological Path Pruning",
      "desc": "A comprehensive deep dive into converting non-convex 2D/3D occupancy spaces into continuous convex polyhedron constraints for fast QP trajectory optimization."
    }
  },
  "timeline": {
    "title": "Education & Milestones",
    "desc": "Academic foundation and competition honors in robotics and control theory",
    "event0": {
      "date": "2022.09 - 2026.06",
      "title": "Xi'an Jiaotong University (985) · B.S. in Automation",
      "desc": "Comprehensive GPA: 3.45/4.0; CET-6: 604, CET-4: 608. Solid foundation in modern control theory, numerical optimization, and embedded systems."
    },
    "event1": {
      "date": "2025.12 - 2026.06",
      "title": "Undergraduate Thesis: Convex Safe Corridor & LO-MPC Motion Planning",
      "desc": "Developed a full-stack Python/CasADi multi-robot motion planning simulation with safe corridors, minimum snap smoothing, and lexicographic MPC."
    },
    "event2": {
      "date": "2025.08 - 2026.03",
      "title": "Arm_Grabbing Hybrid Control & Embodied Imitation Learning R&D",
      "desc": "Formulated SO-ARM101 CAD URDF model, Pinocchio DLS IK solver, MoveIt 2 motion planning, teleoperation streaming, and LeRobot Diffusion Policy training."
    },
    "event3": {
      "date": "2025.05",
      "title": "2025 RoboCup China Open · National 3rd Prize (Lead Embedded)",
      "desc": "Designed full CAN bus topology, DJI M2006 BLDC motor dual-loop PID, and multi-DOF manipulator kinematics & smooth grasping control."
    },
    "event4": {
      "date": "2025.04",
      "title": "Engineering Practice & Innovation Contest · XJTU Silver Medal",
      "desc": "Led the electronic design and chassis motion control programming for an autonomous guided vehicle."
    },
    "event5": {
      "date": "2024.04",
      "title": "MCM Mathematical Contest in Modeling · Honorable Mention",
      "desc": "Formulated mathematical models and numerical optimization algorithms, authoring the full English technical report."
    },
    "event6": {
      "date": "2023.11",
      "title": "National Mathematical Modeling Contest · Provincial 1st & National Encouragement Scholarship",
      "desc": "Recognized for mathematical algorithm derivation and optimization excellence with national-level scholarship."
    },
    "event7": {
      "date": "2022.10",
      "title": "XJTU Campus Football League Champion",
      "desc": "Key player in winning the university-wide championship, demonstrating strong teamwork, resilience, and discipline."
    }
  },
  "skills": {
    "title": "Technical Competencies",
    "desc": "Systematic expertise in robotics motion planning, manipulator manipulation, and embedded control",
    "manipulator": "Robotic Arm & Embodied AI",
    "planning": "Motion Planning & Trajectory Optimization",
    "control": "Motion Control & Numerical Optimization",
    "embedded": "Embedded Systems & Hardware",
    "languages": "Programming Languages & Toolchains"
  },
  "footer": {
    "copy": "FreeMe · Robotics Planning & Control / Manipulator Algorithm Engineer (Embodied AI)",
    "credit": "Inspired by VS Code & Lain's database · Hosted on GitHub Pages"
  }
};

  const FALLBACKS = { zh: FALLBACK_ZH, en: FALLBACK_EN };

  let currentLang = localStorage.getItem('lang') || 'zh';
  let langData = FALLBACKS[currentLang] || FALLBACK_ZH;

  function getNestedValue(obj, key) {
    if (!obj || !key) return undefined;
    return key.split('.').reduce((acc, part) => acc?.[part], obj);
  }

  function getRootPath() {
    const scripts = document.getElementsByTagName('script');
    for (const script of scripts) {
      const src = script.getAttribute('src');
      if (src && src.includes('i18n.js')) {
        // Strip query string (?v=...) and hash (#...)
        const clean = src.split('?')[0].split('#')[0];
        const idx = clean.indexOf('assets/js/i18n.js');
        if (idx !== -1) {
          return clean.substring(0, idx);
        }
      }
    }
    return '';
  }

  const rootPath = getRootPath();

  function t(key) {
    const val = getNestedValue(langData, key);
    if (val !== undefined && val !== null) return val;
    // Fallback to Chinese dictionary if English is missing key
    const fallbackVal = getNestedValue(FALLBACK_ZH, key);
    return (fallbackVal !== undefined && fallbackVal !== null) ? fallbackVal : key;
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
    // Immediately set synchronous fallback for requested language
    langData = FALLBACKS[lang] || FALLBACK_ZH;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updatePageLang();

    const url = `${rootPath}lang/${lang}.json?t=${Date.now()}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        throw new Error(`Expected JSON but received HTML from ${url}`);
      }
      const networkData = await res.json();
      langData = networkData;
      updatePageLang();
      window.dispatchEvent(new CustomEvent('i18nLoaded', { detail: { lang } }));
    } catch (err) {
      console.warn('[i18n] Fetch failed, keeping robust fallback data:', err);
      // Fallback is already applied synchronously
      window.dispatchEvent(new CustomEvent('i18nLoaded', { detail: { lang } }));
    }
  }

  window.i18n = {
    get: t,
    changeLang: (lang) => {
      if (currentLang === lang && langData) return;
      loadLang(lang);
    },
    toggleLang: () => {
      const nextLang = currentLang === 'zh' ? 'en' : 'zh';
      window.i18n.changeLang(nextLang);
    },
    currentLang: () => currentLang,
    isLoaded: () => Boolean(langData),
  };

  // Immediate synchronous initial translation
  updatePageLang();

  // Async refresh from server
  loadLang(currentLang);
})();
