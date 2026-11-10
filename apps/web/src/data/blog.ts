import type { Lang } from '@/lib/i18n';

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	image: string;
	coverImage?: string;
	date: string;
	dateLabel: string;
	readTime: string;
	sections: { heading: string; paragraphs: string[] }[];
};

const FR: BlogPost[] = [
	{
		slug: 'le-fitness-est-dangereux',
		title: 'le fitness est dangereux',
		excerpt:
			'À en croire certains médias, le fitness serait dangereux pour la santé. L’article défend l’idée inverse : la musculation est une base utile, à condition d’être pratiquée sainement et encadrée.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_7197-unS4m.JPG',
		date: '2025-07-16',
		dateLabel: '16 juillet 2025',
		readTime: '5 min',
		sections: [
			{
				heading: 'la croissance',
				paragraphs: [
					'La croissance est largement prédéterminée génétiquement. Contrairement à une croyance tenace, la musculation ne ralentit pas la croissance.',
					'Les douleurs liées à la croissance existent même sans pratique sportive, et la musculation encadrée peut être moins risquée que beaucoup de sports explosifs.',
				],
			},
			{
				heading: 'le poids du corps',
				paragraphs: [
					'L’absence de charge externe ne rend pas automatiquement un exercice plus sûr. Une traction ou un poirier peuvent imposer une charge importante au corps.',
					'Le bon raisonnement consiste à analyser chaque mouvement au cas par cas, avec ou sans charge, plutôt qu’à diaboliser le travail avec poids.',
				],
			},
			{
				heading: 'la préparation physique',
				paragraphs: [
					'La musculation devient facilement acceptable dès qu’on la renomme préparation physique, alors qu’il s’agit du même travail de fond.',
					'Elle prépare autant aux exigences d’un sport qu’aux efforts du quotidien. Selon l’article, c’est un outil de santé autant qu’un outil de performance.',
				],
			},
			{
				heading: 'conclusion',
				paragraphs: [
					'La musculation peut être pratiquée à tout âge si la pratique reste saine, encadrée et adaptée à la personne.',
				],
			},
		],
	},
	{
		slug: 'le-physique-des-reseaux',
		title: 'le physique des réseaux',
		excerpt:
			'Les réseaux sociaux montrent des physiques impressionnants, mais l’image, la génétique et parfois le dopage faussent souvent la comparaison. L’article invite à choisir des modèles réalistes.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1366-2-wvoTw.jpeg',
		coverImage: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_7197-ZRD8w.JPG',
		date: '2025-05-12',
		dateLabel: '12 mai 2025',
		readTime: '5 min',
		sections: [
			{
				heading: 'les photos',
				paragraphs: [
					'Une photo dépend d’un angle, d’une lumière, d’un timing et parfois de retouches. Elle ne représente pas forcément le physique réel du quotidien.',
					'Pour évaluer quelqu’un plus justement, mieux vaut regarder des vidéos naturelles, à la lumière du jour et hors contexte de pose ou de congestion musculaire.',
				],
			},
			{
				heading: 'la génétique',
				paragraphs: [
					'Choisir un modèle totalement différent de soi peut conduire à poursuivre un objectif inaccessible.',
					'La taille, les insertions musculaires, la densité osseuse ou encore le type de fibres influencent fortement le résultat possible. Mieux vaut viser un modèle réaliste.',
				],
			},
			{
				heading: 'le dopage',
				paragraphs: [
					'Le dopage ne concerne pas uniquement le haut niveau et n’est pas toujours visible. Certains physiques exceptionnels reposent aussi sur des produits dopants.',
					'L’article ne moralise pas, mais insiste sur la prudence : un modèle spectaculaire n’est pas toujours un modèle atteignable naturellement.',
				],
			},
			{
				heading: 'conclusion',
				paragraphs: [
					'Entre l’image publiée et la réalité, il y a souvent un écart. La constance, la rigueur et la patience restent les vraies bases.',
				],
			},
		],
	},
];

const EN: BlogPost[] = [
	{
		slug: 'le-fitness-est-dangereux',
		title: 'fitness is dangerous',
		excerpt:
			'According to some media, fitness is dangerous for your health. This article argues the opposite: strength training is a useful foundation, provided it is practised healthily and supervised.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_7197-unS4m.JPG',
		date: '2025-07-16',
		dateLabel: '16 July 2025',
		readTime: '5 min',
		sections: [
			{
				heading: 'growth',
				paragraphs: [
					'Growth is largely predetermined by genetics. Contrary to a stubborn belief, strength training does not slow down growth.',
					'Growing pains exist even without sport, and supervised strength training can be less risky than many explosive sports.',
				],
			},
			{
				heading: 'body weight',
				paragraphs: [
					'The absence of external load does not automatically make an exercise safer. A pull-up or a handstand can place a significant load on the body.',
					'The right approach is to analyse each movement case by case, with or without load, rather than demonising weight training.',
				],
			},
			{
				heading: 'physical preparation',
				paragraphs: [
					'Strength training becomes easily acceptable as soon as it is renamed physical preparation, even though it is the same foundational work.',
					'It prepares you for the demands of a sport as much as for everyday effort. According to the article, it is a health tool as much as a performance tool.',
				],
			},
			{
				heading: 'conclusion',
				paragraphs: [
					'Strength training can be practised at any age as long as the practice stays healthy, supervised and adapted to the person.',
				],
			},
		],
	},
	{
		slug: 'le-physique-des-reseaux',
		title: 'social media physiques',
		excerpt:
			'Social media shows impressive physiques, but image, genetics and sometimes doping often distort the comparison. The article invites you to choose realistic role models.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1366-2-wvoTw.jpeg',
		coverImage: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_7197-ZRD8w.JPG',
		date: '2025-05-12',
		dateLabel: '12 May 2025',
		readTime: '5 min',
		sections: [
			{
				heading: 'photos',
				paragraphs: [
					'A photo depends on an angle, lighting, timing and sometimes retouching. It does not necessarily represent the real everyday physique.',
					'To assess someone more fairly, it is better to look at natural videos, in daylight and outside a posing or pump context.',
				],
			},
			{
				heading: 'genetics',
				paragraphs: [
					'Choosing a model completely different from yourself can lead to pursuing an unreachable goal.',
					'Height, muscle insertions, bone density and fibre type strongly influence the possible result. It is better to aim for a realistic model.',
				],
			},
			{
				heading: 'doping',
				paragraphs: [
					'Doping is not only about elite level and is not always visible. Some exceptional physiques also rely on doping products.',
					'The article does not moralise, but insists on caution: a spectacular model is not always a naturally attainable model.',
				],
			},
			{
				heading: 'conclusion',
				paragraphs: [
					'Between the published image and reality, there is often a gap. Consistency, rigour and patience remain the true foundations.',
				],
			},
		],
	},
];

export function getPosts(lang: Lang): BlogPost[] {
	return lang === 'en' ? EN : FR;
}

export function getPost(slug: string, lang: Lang): BlogPost | undefined {
	return getPosts(lang).find(post => post.slug === slug);
}

/** French posts, used for sitemap and server meta (canonical language). */
export const posts: BlogPost[] = FR;
