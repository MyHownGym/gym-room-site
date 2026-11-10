import type { Route } from './+types/blog';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { getPosts, posts } from '@/data/blog';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Blog — articles & réflexions | Gym Room',
		description: 'Articles et réflexions sur le fitness, la musculation et la performance par Gym Room, studio privé à Versoix.',
		image: posts[0]?.image,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: 'Blog Gym Room',
			mainEntity: {
				'@type': 'ItemList',
				itemListElement: posts.map((post, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					url: `https://www.gym-room.ch/blog/${post.slug}`,
					name: post.title,
				})),
			},
		},
	});
}

export default function BlogPage() {
	const { lang, tr } = useLang();
	const list = getPosts(lang);
	return (
		<main>
			<section className="rail page-hero-text">
				<p className="eyebrow">Blog</p>
				<h1>{tr('articles & réflexions', 'articles & thoughts')}</h1>
			</section>
			<Reveal direction="left">
			<section className="rail page-section">
				<div className="blog-list">
					{list.map(post => (
						<a className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
							<img loading="lazy" src={post.image} alt={post.title} />
							<div className="blog-card-body">
								<p className="eyebrow">{tr('article', 'article')}</p>
								<h2>{post.title}</h2>
								<p className="blog-meta">{post.dateLabel} • {post.readTime}</p>
								<p className="blog-excerpt">{post.excerpt}</p>
								<span className="blog-read">{tr('Lire l’article', 'Read article')}</span>
							</div>
						</a>
					))}
				</div>
			</section>
			</Reveal>
		</main>
	);
}
