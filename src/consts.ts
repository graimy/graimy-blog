export const SITE_TITLE = 'Graimy';
export const SITE_DESCRIPTION =
	'博士生个人博客 — 科研笔记、深度写作、电影随笔与生活碎片。';

export const AUTHOR = {
	name: 'Graimy',
	title: 'PhD Student',
	bio: '即将入学的博士生，研究方向偏量化、数据与实证。在这里沉淀学术思考，记录阅读与观影，也写下生活的零星片段。',
	email: 'hello@example.com',
	github: 'https://github.com/graimy',
};

export type NavItem = {
	href: string;
	label: string;
};

export const NAV_ITEMS: NavItem[] = [
	{ href: '/', label: '首页' },
	{ href: '/blog', label: '写作' },
	{ href: '/reviews', label: '影评' },
	{ href: '/research', label: '科研' },
	{ href: '/about', label: '关于' },
];

export const BLOG_CATEGORIES = [
	{ id: 'research', label: '科研' },
	{ id: 'writing', label: '写作' },
	{ id: 'life', label: '生活' },
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]['id'];

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
	research: '科研',
	writing: '写作',
	life: '生活',
};
