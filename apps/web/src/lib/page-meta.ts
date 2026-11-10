import type { MetaDescriptor } from 'react-router';
import { canonicalPathname } from '@/lib/canonical-url';
import { absoluteUrl, seo as buildSeo, siteOriginFrom, type SeoArgs, type SeoInput } from '@/lib/seo';

/**
 * `seo()` with the page's canonical URL normalised first.
 *
 * Search Console treats `/coaching`, `/coaching/` and `/Coaching` as three URLs.
 * Passing the rendered pathname through unchanged made each variant declare
 * itself canonical, which is exactly the "duplicate, Google chose a different
 * canonical" report. This wrapper collapses the variant to the one preferred
 * URL before the tag is built, so every page's `meta` keeps calling `seo()` the
 * same way and still gets a single, stable canonical.
 *
 * Pages that canonicalise somewhere other than their own URL (a filtered or
 * paginated view) keep passing `path`, which is normalised too.
 *
 * It also declares the page's language. The site serves one URL per page and
 * switches between French and English in the browser, so there is no second,
 * English URL to point at — inventing one (or a second canonical) is what would
 * create the duplicate pages Search Console is reporting. A self-referential
 * `hreflang` plus `x-default` records that the indexable version of each page is
 * the server-rendered French one, and that it is the default for every other
 * language.
 */
export function seo({ matches, location }: SeoArgs, input: SeoInput): MetaDescriptor[] {
	const pathname = canonicalPathname(input.path ?? location.pathname);
	const tags = buildSeo(
		{ matches, location: { ...location, pathname } },
		{ ...input, path: pathname },
	);

	const origin = siteOriginFrom(matches);
	const href = absoluteUrl(origin, pathname);

	if (origin) {
		tags.push(
			{ tagName: 'link', rel: 'alternate', hrefLang: 'fr-CH', href },
			{ tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href },
		);
	}

	return tags;
}
