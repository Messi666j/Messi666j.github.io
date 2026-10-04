# 个人机器人研发作品集网页 (Portfolio for GitHub Pages)

参考 **Lain's database** (`lain-ego0.github.io`) 风格定制的个人极客风主页与项目作品集。

## 🌟 核心特色

1. **终端极客风交互界面**：
   - 带有可交互打字状态模拟与终端样式窗口 (`messi@robotics:~$`)。
   - 支持深色 / 浅色模式切换，并记忆至本地缓存。
2. **多项目深度展示**：
   - **毕设项目 (Corridor-LO-MPC)**：内嵌凸安全走廊、Minimum Snap高阶多项式优化、CasADi LO-MPC词典序控制与编队误差结果，支持前端多图自由切换展示。
   - **RoboCup救援机器人**：嵌入多自由度机械臂正逆运动学解析、五次多项式平滑轨迹插补与M2006电机双闭环电控架构图。
   - **TrailBlazer ROS 2 自主导航系统**：嵌入 FAST-LIO2 激光SLAM、ESDF建图、B-spline与MPPI局部控制器分层架构。
   - **六自由度机械臂动力学与阻抗控制**：预留进阶机械臂插槽，便于后续直接填充新项目与论文成果。
3. **响应式与高性能**：
   - 零重型框架依赖，纯净 HTML5 + CSS3 + Vanilla JS，首屏加载速度极快，完美适配桌面与手机端。

---

## 🚀 2分钟一键部署到 GitHub Pages

你可以通过以下两种简单方式将本作品集发布到公网：

### 方式一：部署到个人顶级域名主页 `https://Messi666j.github.io`（推荐）

1. 在 GitHub 上新建一个名为 `Messi666j.github.io` 的公开仓库（Public Repository）。
2. 在本地进入 `portfolio` 文件夹，运行以下 Git 命令：
   ```bash
   cd "D:\LaTeXProj\resume-main (工作)\portfolio"
   git init
   git add .
   git commit -m "feat: initial commit for robotics portfolio"
   git branch -M main
   git remote add origin git@github.com:Messi666j/Messi666j.github.io.git
   git push -u origin main -f
   ```
3. 打开浏览器访问 `https://Messi666j.github.io`，等待 1-2 分钟即可全球访问！

### 方式二：部署到已有仓库的 gh-pages 分支

如果想作为子项目（例如 `https://Messi666j.github.io/Corridor-LO-MPC/`）：
在仓库设置中的 **Pages** 选项，选择部署分支为 `gh-pages` 或 `main` 即可。

---

## 💻 本地预览方法

直接双击打开 `portfolio/index.html`，或者在终端运行轻量 HTTP 服务：

```bash
# 使用 Python 内置静态服务器
python -m http.server 8000 --directory "D:\LaTeXProj\resume-main (工作)\portfolio"
```
然后在浏览器中打开 `http://localhost:8000` 即可实时预览。
