import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	redirect,
	Scripts,
	ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BackToTop } from '@/components/back-to-top';
import { canonicalOrigin } from '@/lib/canonical-origin.server';
import { normalizedPathname } from '@/lib/canonical-url';
import { HorizonsPreviewScripts } from './horizons-preview-scripts';
import { LanguageProvider } from '@/lib/i18n';

const ICON_VERSION = '6';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet, precedence: 'default' },
	{ rel: 'icon', href: `/favicon.ico?v=${ICON_VERSION}`, sizes: '48x48' },
	{ rel: 'icon', href: `/favicon-32.png?v=${ICON_VERSION}`, type: 'image/png', sizes: '32x32' },
	{ rel: 'icon', href: `/icon-192.png?v=${ICON_VERSION}`, type: 'image/png', sizes: '192x192' },
	{ rel: 'icon', href: `/icon-512.png?v=${ICON_VERSION}`, type: 'image/png', sizes: '512x512' },
	{ rel: 'apple-touch-icon', href: `/apple-touch-icon.png?v=${ICON_VERSION}`, sizes: '180x180' },
	{ rel: 'manifest', href: `/site.webmanifest?v=${ICON_VERSION}` },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Raleway:wght@500;600;700&display=swap',
	},
];

/**
 * Publishes the site's public origin, which `seo()` reads to build canonical and
 * `og:url` tags, and advertises the sitemap to crawlers that read response
 * headers rather than HTML.
 *
 * A `meta` export can only reach server data through `matches`, and the `headers`
 * export cannot see loader data at all, so both have to travel this way.
 *
 * `canonicalOrigin` collapses the apex/`www.`/preview hosts onto the one domain
 * the site declares itself on, so no page ever canonicalises a preview host or
 * duplicates itself under two hostnames.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = canonicalOrigin(request);

	return data(
		{ origin },
		{ headers: { Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"` } },
	);
}

/**
 * A page route that exports `headers` replaces this one, so merge `parentHeaders`
 * there rather than returning only that route's own headers.
 */

/**
 * Collapses the duplicate URL variants of an otherwise identical page onto the
 * single URL that page should be indexed under: lowercase, no trailing slash, no
 * `.html`, no `index`, and no retired path.
 *
 * Without this, `/Coaching`, `/coaching/` and `/coaching.html` all answered 200
 * and each declared itself canonical, which is what Search Console reports as
 * "duplicate, Google chose a different canonical". The redirect makes the
 * preferred URL the only one that serves the page.
 */
async function normalizeUrlMiddleware({ request }: Parameters<Route.MiddlewareFunction>[0]) {
	// Static export: Cloudflare Pages serves each page at its clean URL itself.
	if (process.env.STATIC_EXPORT) {
		return;
	}

	if (request.method !== 'GET' && request.method !== 'HEAD') {
		return;
	}

	const { pathname, search } = new URL(request.url);

	// API responses and React Router data requests are not indexable pages — never redirect them.
	if (pathname === '/api' || pathname.startsWith('/api/') || pathname.endsWith('.data')) {
		return;
	}

	const target = normalizedPathname(pathname);

	if (target === pathname) {
		return;
	}

	throw redirect(`${target}${search}`, 301);
}

export const middleware: Route.MiddlewareFunction[] = [normalizeUrlMiddleware];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		// suppressHydrationWarning absorbs attributes injected by browser extensions
		// and theme scripts before hydration; attribute-only, one element deep. Keep both.
		<html lang="fr-CH" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#015b9c" />
				<meta name="apple-mobile-web-app-title" content="Gym Room" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="icon" href={`/favicon.png?v=${ICON_VERSION}`} type="image/png" sizes="180x180" />
				<link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${ICON_VERSION}`} sizes="180x180" />
				<Meta />
				<Links />
				<HorizonsPreviewScripts />
			</head>
			<body suppressHydrationWarning>
				<div id="root">{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<LanguageProvider>
			<SiteHeader />
			<Outlet />
			<SiteFooter />
			<BackToTop />
		</LanguageProvider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	const isClientErrorResponse = isRouteErrorResponse(error) && error.status < 500;

	if (import.meta.env.DEV && !isClientErrorResponse) {
		return null;
	}

	let message = 'Oops!';
	let details = 'An unexpected error occurred.';

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
		</main>
	);
}
