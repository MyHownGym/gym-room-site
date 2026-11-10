import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	...(process.env.STATIC_EXPORT
		? []
		: [route('services', 'routes/services.tsx'), route('access', 'routes/access.tsx')]),
	index('routes/home.tsx'),
	route('coaching', 'routes/coaching.tsx'),
	route('location-coach', 'routes/location-coach.tsx'),
	route('gym-lab', 'routes/gym-lab.tsx'),
	route('studio', 'routes/studio.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('faq', 'routes/faq.tsx'),
	route('galerie', 'routes/galerie.tsx'),
	route('blog', 'routes/blog.tsx'),
	route('blog/:slug', 'routes/blog.$slug.tsx'),
	route('mentions-legales', 'routes/mentions-legales.tsx'),
	route('politique-confidentialite', 'routes/politique-confidentialite.tsx'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	...(process.env.STATIC_EXPORT
		? []
		: [route('api/health', 'routes/api.health.ts'), route('api/*', 'routes/api.$.ts')]),
] satisfies RouteConfig;
