# Graimy — 个人博客

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览生产构建
```

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
