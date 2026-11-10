import { canonicalOriginFrom, isUnpublishedHost, PREFERRED_HOST } from '@/lib/canonical-url';
import { siteOrigin } from '@/lib/site-origin.server';

/**
 * The origin the site declares itself on — the base of every `canonical`,
 * `og:url` and sitemap `<loc>`.
 *
 * `SITE_ORIGIN` (or `PUBLIC_SITE_URL`) wins when the platform provides it, so a
 * site moved to another domain only needs that variable set. Otherwise the
 * request host is mapped onto the site's own public domain, which keeps the
 * apex and `www.` variants from each declaring themselves canonical.
 *
 * Read per request, inside the loader, never at module scope.
 */
export function canonicalOrigin(request: Request): string {
	const configured = process.env.SITE_ORIGIN ?? process.env.PUBLIC_SITE_URL;

	if (configured && /^https?:\/\//i.test(configured.trim())) {
		return configured.trim().replace(/\/+$/, '');
	}

	const requestOrigin = siteOrigin(request);

	try {
		if (isUnpublishedHost(new URL(requestOrigin).hostname)) {
			return `https://${PREFERRED_HOST}`;
		}
	} catch {
		return `https://${PREFERRED_HOST}`;
	}

	return canonicalOriginFrom(requestOrigin);
}
