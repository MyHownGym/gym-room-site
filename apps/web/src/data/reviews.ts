import type { Lang } from '@/lib/i18n';

export type Review = {
	name: string;
	when: { fr: string; en: string };
	text: { fr: string; en: string };
};

/** Real Google reviews that include written feedback. No invented scores. */
export const reviews: Review[] = [
	{
		name: 'Anoosh Ghavami',
		when: { fr: 'Il y a 3 mois', en: '3 months ago' },
		text: {
			fr: 'Super session, coach attentif à mes demandes de dernière minute avec adaptation du programme.',
			en: 'Great session. The coach paid attention to my last-minute requests and adapted the programme.',
		},
	},
	{
		name: 'Mark Williams',
		when: { fr: 'Il y a 4 mois', en: '4 months ago' },
		text: {
			fr: 'Superbe salle de fitness privative complètement équipée, idéale pour du coaching privé individuel.',
			en: 'Superb private fitness room, fully equipped, ideal for one-to-one private coaching.',
		},
	},
	{
		name: 'Hans Schwytzer',
		when: { fr: 'Il y a 10 mois', en: '10 months ago' },
		text: {
			fr: 'Beaucoup d’empathie.',
			en: 'A lot of empathy.',
		},
	},
	{
		name: 'Héléna Hoang',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Le coach est très professionnel et ses explications sont claires. Je recommande à 100 % !',
			en: 'The coach is very professional and his explanations are clear. I recommend him 100%!',
		},
	},
	{
		name: 'Christian Otte',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Cours super qualitatif et très pro, je conseille fortement !!',
			en: 'Very high-quality and professional sessions. I strongly recommend them!',
		},
	},
	{
		name: 'Mark Williams',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Commentaire un peu partial vu que le coach est mon fils, mais son approche est en tous points conforme à la description sur le site. Le studio est à la fois fonctionnel et chaleureux, un vrai plaisir de s’y entraîner.',
			en: 'A slightly biased comment, since the coach is my son, but his approach matches the site description in every way. The studio is both functional and warm — a real pleasure to train in.',
		},
	},
	{
		name: 'Héléna Hoang',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Le coach est très professionnel et sait adapter les séances selon les besoins et le niveau de chacun. Les locaux sont propres et bien entretenus. Je recommande à 100 % !',
			en: 'The coach is very professional and adapts sessions to each person’s needs and level. The premises are clean and well kept. I recommend him 100%!',
		},
	},
	{
		name: 'Anoosh Ghavami',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Coach attentif aux demandes, entraînement bien pensé, salle optimale.',
			en: 'A coach attentive to requests, a well thought-out workout, and an optimal room.',
		},
	},
	{
		name: 'Mendes Rafael',
		when: { fr: 'L’année dernière', en: 'Last year' },
		text: {
			fr: 'Excellente première séance chez Gym Room ! Le coach est à l’écoute, pédagogue et très professionnel. La salle est propre, les locaux sont modernes et bien entretenus, avec un vestiaire spacieux et agréable. Je recommande sans hésiter !',
			en: 'Excellent first session at Gym Room! The coach listens, teaches well and is very professional. The room is clean, the premises are modern and well kept, with a spacious, pleasant changing room. I recommend it without hesitation!',
		},
	},
];

export function getReviews(lang: Lang) {
	return reviews.map(review => ({
		name: review.name,
		when: review.when[lang],
		text: review.text[lang],
	}));
}
