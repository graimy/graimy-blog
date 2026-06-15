import type { CollectionEntry } from 'astro:content';

export type TaggedPost = CollectionEntry<'blog'>;

export function getAllTags(posts: TaggedPost[]) {
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([tag, count]) => ({ tag, count }));
}

export function getPostsByTag(posts: TaggedPost[], tag: string) {
	return posts.filter((post) => post.data.tags.includes(tag));
}

export function slugifyTag(tag: string) {
	return encodeURIComponent(tag.toLowerCase());
}

export function tagFromSlug(slug: string, posts: TaggedPost[]) {
	const decoded = decodeURIComponent(slug).toLowerCase();
	const tags = getAllTags(posts);
	return tags.find(({ tag }) => tag.toLowerCase() === decoded)?.tag;
}
