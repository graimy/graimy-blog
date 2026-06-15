const CJK_REGEX = /[\u4e00-\u9fff\u3400-\u4dbf]/g;

export function getReadingTime(text: string): number {
	const cjkMatches = text.match(CJK_REGEX)?.length ?? 0;
	const latinWords = text
		.replace(CJK_REGEX, ' ')
		.trim()
		.split(/\s+/)
		.filter(Boolean).length;

	const minutes = cjkMatches / 400 + latinWords / 200;
	return Math.max(1, Math.ceil(minutes));
}

export function formatReadingTime(minutes: number): string {
	return `${minutes} 分钟阅读`;
}
