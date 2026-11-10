import type { Route } from './+types/sitemap.xml';
import { canonicalOrigin } from '@/lib/canonical-origin.server';
import { normalizedPathname } from '@/lib/canonical-url';

type SitemapEntry = {
	path: string;
	lastmod?: string;
};

const STATIC_PATHS = [
	'/',
	'/coaching',
	'/location-coach',
	'/gym-lab',
	'/studio',
	'/contact',
	'/faq',
	'/galerie',
	'/blog',
	'/mentions-legales',
	'/politique-confidentialite',
];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function toLoc(origin: string, path: string): string {
	// Same normalisation the page canonicals use, so the sitemap never advertises
	// a URL the site redirects away from.
	const normalized = normalizedPathname(path.startsWith('/') ? path : `/${path}`);

	return `${origin}${normalized}`;
}

function serializeSitemap(origin: string, entries: SitemapEntry[]): string {
	const urls = entries
		.map(entry => {
			const loc = escapeXml(toLoc(origin, entry.path));
			const lastmod = entry.lastmod
				? `\n\t\t<lastmod>${escapeXml(entry.lastmod)}</lastmod>`
				: '';

			return `\t<url>\n\t\t<loc>${loc}</loc>${lastmod}\n\t</url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * Public dynamic URLs (blog posts, PDPs, articles).
 * Return `{ path, lastmod }` in the same change that adds a collection.
 * Return `[]` only while the site has no public records; clear those URLs
 * again in the same change that removes the collection.
 */
async function getDynamicEntries(): Promise<SitemapEntry[]> {
	const { posts } = await import('@/data/blog');
	return posts.map(post => ({ path: `/blog/${post.slug}`, lastmod: post.date }));
}

export async function loader({ request }: Route.LoaderArgs) {
	const origin = canonicalOrigin(request);
	const entries: SitemapEntry[] = [
		...STATIC_PATHS.map(path => ({ path })),
		...(await getDynamicEntries()),
	];

	return new Response(serializeSitemap(origin, entries), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
			'Access-Control-Allow-Origin': '*',
		},
	});
}
