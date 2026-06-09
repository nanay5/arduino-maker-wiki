# Arduino AI 创客教育 Wiki

基于 Astro + Starlight 的免费开源创客教育 Wiki 网站，是 Arduino AI 创客教育业务方案的获客入口、品牌资产和售后系统。

**线上地址**：https://wiki-lemon-gamma.vercel.app

## 项目结构

```
wiki/
├── astro.config.mjs          # Astro + Starlight 配置（侧边栏、搜索、i18n）
├── package.json
├── src/
│   ├── content.config.ts     # Astro 6 内容集合配置
│   ├── content/docs/         # 📝 所有 Wiki 页面（MDX 格式）
│   │   ├── index.mdx         # 首页（引用 HomePage 组件）
│   │   ├── students/         # 学生区 — 10篇教程
│   │   ├── teachers/         # 教师区 — 4个资源页
│   │   ├── parents/          # 家长区 — 作品展示 + 课程对比
│   │   ├── hardware/         # 硬件区 — 套件清单 + 故障排查索引
│   │   └── advanced/         # 高阶路线 — 占位引导页
│   ├── components/           # 🧩 Astro 可复用组件
│   │   ├── HomePage.astro
│   │   ├── KitCTA.astro      # 底部套件推荐卡片（自动匹配）
│   │   ├── Troubleshooting.astro  # 故障排查表（自动匹配元件）
│   │   ├── VersionBadge.astro     # 版本号 + 更新日期标签
│   │   └── DifficultyStars.astro  # 难度星级
│   ├── data/                 # 📊 共享数据层
│   │   ├── troubleshooting.json   # 故障排查库（按元件索引）
│   │   └── kits.json              # 套件信息（名称/价格/链接）
│   └── styles/
│       └── custom.css        # 创客工坊风主题（设计Token + 暗色模式）
├── public/
│   ├── favicon.svg
│   └── images/               # 接线图、元件特写、作品照片
└── dist/                     # 构建输出（自动生成，不提交）
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（热更新）
npm run dev
# → http://localhost:4321
# 侧边栏按内容自动生成。Ctrl+K 打开搜索。

# 生产构建
npm run build
# → dist/ 目录生成静态文件

# 预览生产版本
npm run preview
```

## 添加新教程（3 步）

**1. 在 `src/content/docs/students/` 下新建 `.mdx` 文件**

文件名即 URL slug，例如 `my-project.mdx` → `/students/my-project/`

**2. 复制以下 frontmatter 模板并修改**

```yaml
---
title: "你的项目标题"
slug: "students/my-project"
section: "students"
category: "入门"           # 入门 / 关键组件 / 进阶项目
kit: "starter"              # starter | ai-smart-car | classroom-12
parts: ["arduino-uno"]      # 用到的元件ID，见 troubleshooting.json
difficulty: 1               # 1-5
duration: "XX分钟"
version: "1.0"
updated: "2026-06-XX"
---
```

**3. 写内容 → 提交 → 自动部署**

```bash
git add src/content/docs/students/my-project.mdx
git commit -m "feat: add my-project tutorial"
git push
# Vercel 自动构建部署（1-2分钟上线）
```

每个教程用统一的 8 区模板：
- 📋 材料清单 → 🔌 接线图 → 💻 代码 → ⚡ 上传与测试
- ✅ 成功现象（绿框） → 🏆 挑战任务（橙框）
- `<Troubleshooting>` 组件 → `<KitCTA>` 组件

## 更新故障排查库

编辑 `src/data/troubleshooting.json`，按模板新增条目：

```json
{
  "id": "元件ID-简短描述",
  "part": "元件ID",
  "symptom": "用户看到的错误现象",
  "cause": "根本原因",
  "fix": "具体解决步骤",
  "severity": "common"
}
```

所有 `parts` 字段包含该元件 ID 的教程页面会自动显示新故障条目。`/hardware/troubleshooting/` 索引页也会同步更新。

## 修改套件信息/价格/联系方式

编辑 `src/data/kits.json`，修改对应套件的 `price`、`includes`、`buy_link` 等字段。

**联系方式（微信号）**当前在以下位置：

| 位置 | 文件 |
|---|---|
| 首页 footer | `src/components/HomePage.astro`（搜索 `haoleng420`） |
| 硬件区底部 | `src/content/docs/hardware/kits.mdx` |
| 教师区各页面 | `src/content/docs/teachers/*.mdx` |
| 家长区各页面 | `src/content/docs/parents/*.mdx` |

全部替换为新的联系方式即可。

## 侧边栏导航

编辑 `astro.config.mjs` 中的 `sidebar` 数组。新增教程后，在对应 `items` 中追加一行：

```js
{ label: '新教程名', link: '/students/my-project/' },
```

## 部署

本项目已连接 Vercel。`git push` 到 main 分支后自动触发构建部署。

```bash
# 手动部署（无需 push）
npx vercel --prod
```

## 技术栈

- **框架**：Astro 6（静态站点生成）
- **主题**：Starlight 0.39（导航/搜索/暗色模式/侧边栏/Pagefind 中文搜索）
- **内容**：MDX（Markdown + 嵌入式 Astro 组件）
- **部署**：Vercel（免费层级）

## 设计

创客工坊风（Maker Workshop）—— 深灰 + 暖橙 + 米白配色，暗色模式支持，768px 响应式断点。设计 Token 定义在 `src/styles/custom.css` 的 `:root` 中。
