import type { Route } from './+types/blog.$slug';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { getPost, posts } from '@/data/blog';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const post = getPost(params.slug, 'fr');
	if (!post) {
		return seo({ matches, location }, {
			title: 'Article introuvable | Gym Room',
			description: 'Cet article n’est plus publié.',
			noindex: true,
		});
	}
	return seo({ matches, location }, {
		title: `${post.title} | Blog Gym Room`,
		description: post.excerpt,
		image: post.coverImage ?? post.image,
		type: 'article',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: post.title,
				description: post.excerpt,
				image: post.coverImage ?? post.image,
				datePublished: post.date,
				author: { '@type': 'Person', name: 'Titouan Williams' },
				publisher: { '@type': 'Organization', name: 'Gym Room' },
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gym-room.ch/' },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.gym-room.ch/blog' },
					{ '@type': 'ListItem', position: 3, name: post.title },
				],
			},
		],
	});
}

export function loader({ params }: Route.LoaderArgs) {
	const exists = posts.some(post => post.slug === params.slug);
	if (!exists) {
		throw new Response('Article introuvable', { status: 404 });
	}
	return { slug: params.slug };
}

export default function BlogPostPage({ loaderData }: Route.ComponentProps) {
	const { lang, tr } = useLang();
	const post = getPost(loaderData.slug, lang);
	if (!post) return null;
	return (
		<main>
			<Reveal direction="left">
			<article className="rail page-section article">
				<p className="eyebrow">{tr('article', 'article')}</p>
				<h1>{post.title}</h1>
				<p className="article-excerpt">{post.excerpt}</p>
				<img className="article-cover" src={post.coverImage ?? post.image} alt={post.title} />
				<p className="article-meta">{post.dateLabel} • {post.readTime}</p>
				<div className="article-body">
					{post.sections.map(section => (
						<section key={section.heading}>
							<h2>{section.heading}</h2>
							{section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
						</section>
					))}
				</div>
				<div className="article-back">
					<a className="button glass" href="/blog">← {tr('Retour au blog', 'Back to blog')}</a>
				</div>
			</article>
			</Reveal>
		</main>
	);
}
