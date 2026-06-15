# Graimy — 个人博客

博士生个人博客，基于 [Astro](https://astro.build/) 构建。支持 Markdown / MDX、LaTeX 数学公式、代码高亮与暗黑模式。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览生产构建
```

## 内容目录

| 路径 | 用途 |
|------|------|
| `src/content/blog/` | 科研 / 写作 / 生活文章 |
| `src/content/reviews/` | 电影随笔 |
| `src/content/projects/` | 科研项目 |

## 自定义

- **站点信息、导航、社交链接：** `src/consts.ts`
- **生产域名（RSS、Sitemap）：** `astro.config.mjs` → `site`
- **全局样式与主题色：** `src/styles/global.css`

## 自动部署

代码已连接 GitHub 与 Vercel。每次 push 到 `master` 分支会自动触发部署。

```bash
git add .
git commit -m "update content"
git push
```

仓库地址：https://github.com/graimy/graimy-blog

- Astro 6 + Content Collections
- Tailwind CSS 4 + Typography
- MDX + remark-math + rehype-katex
- 部署：Vercel / Netlify
