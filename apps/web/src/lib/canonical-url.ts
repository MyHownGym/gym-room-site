/**
 * URL normalisation for the site's public, indexable URLs.
 *
 * Search Console reports two families of problems that both come from the same
 * cause — the same page reachable, and declaring itself canonical, under more
 * than one URL:
 *
 * - "Autre page avec balise canonique correcte" (alternate page with proper
 *   canonical tag): a variant was crawled and pointed at another URL.
 * - "Page en double : Google n'a pas choisi la même URL canonique que
 *   l'utilisateur" (duplicate, Google chose a different canonical): the variant
 *   declared one canonical while Google picked another, usually because the
 *   host, a trailing slash, or a legacy path also answered 200 with a
 *   self-referential canonical.
 *
 * So every page has exactly one preferred URL: one host, lowercase, no trailing
 * slash, no `.html`, no query string. Requests for the other variants are
 * redirected to it (see the root middleware), and the `canonical` tag always
 * names it.
 */

/** The site's public domain, as used by its own metadata and content. */
export const SITE_DOMAIN = 'gym-room.ch';

/**
 * The preferred host. The site's own Open Graph images and structured data
 * already use `www.`, so the whole site is declared on it rather than split
 * between the apex and `www.` — which is what produced the duplicate warnings.
 */
export const PREFERRED_HOST = `www.${SITE_DOMAIN}`;

const SITE_HOSTS = new Set([SITE_DOMAIN, PREFERRED_HOST]);

/** Hosts that must never be the canonical host of an indexed page. */
const UNPUBLISHED_HOST_SUFFIXES = [
	'.app-preview.com',
	'.app-preview.io',
	'.hostingersite.com',
	'.hostingersite.dev',
	'.horizons.hostinger.com',
];

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);

export function isUnpublishedHost(hostname: string): boolean {
	const host = hostname.toLowerCase();

	return LOCAL_HOSTNAMES.has(host) || UNPUBLISHED_HOST_SUFFIXES.some(suffix => host.endsWith(suffix));
}

/**
 * The origin every canonical tag and sitemap URL is built from: the configured
 * public domain when there is one, otherwise the site's own domain — never a
 * sandbox preview host, which would declare the preview as the canonical site.
 */
export function canonicalOriginFrom(requestOrigin: string): string {
	let hostname = '';

	try {
		const url = new URL(requestOrigin);
		hostname = url.hostname.toLowerCase();

		if (SITE_HOSTS.has(hostname) || isUnpublishedHost(hostname)) {
			return `https://${PREFERRED_HOST}`;
		}

		return `${url.protocol}//${url.host}`;
	} catch {
		return `https://${PREFERRED_HOST}`;
	}
}

/**
 * Retired paths from earlier versions of the site. They are still linked from
 * search results, so they answer with a permanent redirect instead of a 404 or
 * a second copy of the page.
 */
const LEGACY_PATHS: Record<string, string> = {
	'/accueil': '/',
	'/home': '/',
	'/index': '/',
	'/services': '/coaching',
	'/access': '/location-coach',
	'/galerie-photos': '/galerie',
	'/photos': '/galerie',
	'/tarifs': '/coaching',
};

/**
 * The single path we want indexed for a page: lowercase, no trailing slash
 * (except the home page), no `.html` extension, no `index`.
 */
export function normalizedPathname(pathname: string): string {
	let path = pathname.split('?')[0].split('#')[0];

	// Collapse duplicate slashes so `//contact` is not a second URL of `/contact`.
	path = path.replace(/\/{2,}/g, '/');

	if (/\/index\.html?$/i.test(path)) {
		path = path.replace(/\/?index\.html?$/i, '/');
	} else {
		path = path.replace(/\.html?$/i, '');
	}

	if (!path.startsWith('/')) {
		path = `/${path}`;
	}

	if (path.length > 1) {
		path = path.replace(/\/+$/, '');
	}

	path = path.toLowerCase();

	if (!path) {
		return '/';
	}

	return LEGACY_PATHS[path] ?? path;
}

/**
 * The canonical path of a page whose URL is currently being rendered. Kept
 * separate from `normalizedPathname` because a canonical must never follow a
 * legacy redirect — it names the destination instead.
 */
export function canonicalPathname(pathname: string): string {
	return LEGACY_PATHS[normalizedPathname(pathname)] ?? normalizedPathname(pathname);
}
