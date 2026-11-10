import type { Config } from '@react-router/dev/config';

// Static build for Cloudflare Pages when STATIC_EXPORT is set; the original Node server build otherwise.
const isStatic = Boolean(process.env.STATIC_EXPORT);

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	ssr: !isStatic,
	prerender: isStatic ? [
		'/',
		'/coaching',
		'/location-coach',
		'/gym-lab',
		'/studio',
		'/contact',
		'/faq',
		'/galerie',
		'/blog',
		'/blog/le-fitness-est-dangereux',
		'/blog/le-physique-des-reseaux',
		'/mentions-legales',
		'/politique-confidentialite',
		'/sitemap.xml',
		'/robots.txt',
	] : undefined,
} satisfies Config;
