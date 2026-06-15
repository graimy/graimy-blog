export type TocHeading = {
	depth: number;
	slug: string;
	text: string;
};

export function slugifyHeading(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\u4e00-\u9fff\s-]/g, '')
		.replace(/\s+/g, '-');
}

export function getTableOfContents(markdown: string): TocHeading[] {
	const headings: TocHeading[] = [];
	const regex = /^(#{2,3})\s+(.+)$/gm;

	for (const match of markdown.matchAll(regex)) {
		const depth = match[1].length;
		const text = match[2].replace(/[*_`#\[\]]/g, '').trim();
		headings.push({ depth, text, slug: slugifyHeading(text) });
	}

	return headings;
}
