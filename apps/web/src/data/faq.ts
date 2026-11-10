import type { Lang } from '@/lib/i18n';

export type FaqEntry = { question: string; answer: string };

const FR: FaqEntry[] = [
	{
		question: 'Quels services sont proposés chez Gym Room ?',
		answer:
			'Gym Room propose trois piliers : le Coaching (présentiel à Versoix ou programme en ligne via l’application Ekklo), la Location coach (studio privé à louer pour les coachs indépendants) et le Gym Lab (testing et mesures de performance).',
	},
	{
		question: 'Comment réserver chez Gym Room ?',
		answer:
			'La réservation se fait via le système en ligne Setmore, accessible depuis le bouton « Réserver » du site. Tu choisis ton créneau directement dans le calendrier.',
	},
	{
		question: 'Quels sont les horaires de Gym Room ?',
		answer: 'Le studio est ouvert 24/7, sur rendez-vous uniquement.',
	},
	{
		question: 'Comment payer chez Gym Room ?',
		answer:
			'Le paiement peut s’effectuer en ligne lors de la réservation ou directement sur place au studio.',
	},
	{
		question: 'Est-il possible d’annuler une réservation ?',
		answer:
			'Oui, l’annulation est flexible jusqu’à 24h avant le rendez-vous. Au-delà, la séance peut être facturée.',
	},
	{
		question: 'Quel est le diplôme du coach ?',
		answer:
			'Titouan Williams est titulaire d’un Bachelor en Sciences du sport (BSc) et de la formation Entraîneur B de Swiss Athletics.',
	},
	{
		question: 'De quelle université le coach est-il diplômé ?',
		answer: 'L’université de Lausanne (UNIL), en Sciences du sport.',
	},
	{
		question: 'Où est situé le studio ?',
		answer: 'Avenue Choiseul 19a, 1290 Versoix, Genève.',
	},
	{
		question: 'Quelles marques de machines se trouvent à Gym Room ?',
		answer:
			'Le studio est équipé de matériel de qualité pour la musculation, le cardio et le testing Gym Lab (k-power, k-deltas, k-pull).',
	},
	{
		question: 'Y a-t-il des vestiaires chez Gym Room ?',
		answer:
			'Oui, un petit espace vestiaire permet de se changer, avec des douches communes à disposition.',
	},
	{
		question: 'Comment accéder au studio ?',
		answer:
			'Le studio se trouve à Avenue Choiseul 19a à Versoix. L’accès se fait sur rendez-vous, réservé au préalable en ligne.',
	},
	{
		question: 'Quel arrêt de bus à proximité ?',
		answer: 'L’arrêt de bus le plus proche est celui de Pont-Céard, à quelques minutes à pied du studio.',
	},
	{
		question: 'Quel arrêt de train à proximité ?',
		answer: 'La gare de Pont-Céard est à environ 3 minutes à pied du studio.',
	},
	{
		question: 'Quels magasins se trouvent à proximité du studio ?',
		answer:
			'Le centre de Versoix regroupe plusieurs commerces, banques et services à quelques minutes du studio.',
	},
	{
		question: 'Quel est le supermarché le plus proche du studio ?',
		answer: 'Un Migros et un Coop se trouvent dans le centre de Versoix, à proximité immédiate du studio.',
	},
	{
		question: 'Y a-t-il une école à proximité ?',
		answer: 'Oui, plusieurs écoles se trouvent dans le quartier de Versoix, à courte distance du studio.',
	},
	{
		question: 'Quelles entreprises se trouvent à proximité ?',
		answer: 'L’avenue Choiseul et le centre de Versoix accueillent diverses entreprises et indépendants.',
	},
	{
		question: 'Quels restaurants à proximité ?',
		answer: 'Plusieurs restaurants et cafés du centre de Versoix sont accessibles à pied depuis le studio.',
	},
	{
		question: 'Quelles entreprises y a-t-il à l’avenue Choiseul ?',
		answer: 'L’avenue Choiseul regroupe des commerces, des cabinets et des petits indépendants.',
	},
	{
		question: 'Y a-t-il un physiothérapeute à proximité ?',
		answer: 'Oui, des cabinets de physiothérapie sont installés dans le secteur de Versoix.',
	},
	{
		question: 'Y a-t-il une nutritionniste à proximité ?',
		answer:
			'Oui. Gym Room propose d’ailleurs une remise sur la première consultation nutritionnelle avec un partenaire proche du studio.',
	},
];

const EN: FaqEntry[] = [
	{
		question: 'What services does Gym Room offer?',
		answer:
			'Gym Room has three pillars: Coaching (in person in Versoix or an online programme via the Ekklo app), Studio rental (a private studio to rent for independent coaches) and Gym Lab (testing and performance measurement).',
	},
	{
		question: 'How do I book at Gym Room?',
		answer:
			'Booking is done through the online Setmore system, accessible from the “Book” button on the site. You pick your slot directly in the calendar.',
	},
	{
		question: 'What are Gym Room’s opening hours?',
		answer: 'The studio is open 24/7, by appointment only.',
	},
	{
		question: 'How do I pay at Gym Room?',
		answer:
			'Payment can be made online when booking or directly on site at the studio.',
	},
	{
		question: 'Can I cancel a booking?',
		answer:
			'Yes, cancellation is flexible up to 24h before the appointment. After that, the session may be charged.',
	},
	{
		question: 'What is the coach’s qualification?',
		answer:
			'Titouan Williams holds a Bachelor in Sport Science (BSc) and the Entraîneur B certification from Swiss Athletics.',
	},
	{
		question: 'Which university is the coach graduated from?',
		answer: 'The University of Lausanne (UNIL), in Sport Science.',
	},
	{
		question: 'Where is the studio located?',
		answer: 'Avenue Choiseul 19a, 1290 Versoix, Geneva.',
	},
	{
		question: 'Which machine brands are at Gym Room?',
		answer:
			'The studio is equipped with quality gear for strength training, cardio and Gym Lab testing (k-power, k-deltas, k-pull).',
	},
	{
		question: 'Are there changing rooms at Gym Room?',
		answer:
			'Yes, a small changing area lets you get ready, with shared showers available.',
	},
	{
		question: 'How do I access the studio?',
		answer:
			'The studio is at Avenue Choiseul 19a in Versoix. Access is by appointment, booked online in advance.',
	},
	{
		question: 'Which bus stop is nearby?',
		answer: 'The nearest bus stop is Pont-Céard, a few minutes’ walk from the studio.',
	},
	{
		question: 'Which train station is nearby?',
		answer: 'Pont-Céard station is about 3 minutes’ walk from the studio.',
	},
	{
		question: 'Which shops are near the studio?',
		answer:
			'Versoix centre has several shops, banks and services a few minutes from the studio.',
	},
	{
		question: 'Which supermarket is closest to the studio?',
		answer: 'A Migros and a Coop are in Versoix centre, right next to the studio.',
	},
	{
		question: 'Is there a school nearby?',
		answer: 'Yes, several schools are in the Versoix area, a short distance from the studio.',
	},
	{
		question: 'Which businesses are nearby?',
		answer: 'Avenue Choiseul and Versoix centre host various businesses and independents.',
	},
	{
		question: 'Which restaurants are nearby?',
		answer: 'Several restaurants and cafés in Versoix centre are within walking distance of the studio.',
	},
	{
		question: 'Which businesses are on avenue Choiseul?',
		answer: 'Avenue Choiseul has shops, practices and small independents.',
	},
	{
		question: 'Is there a physiotherapist nearby?',
		answer: 'Yes, physiotherapy practices are established in the Versoix area.',
	},
	{
		question: 'Is there a nutritionist nearby?',
		answer:
			'Yes. Gym Room also offers a discount on the first nutrition consultation with a partner near the studio.',
	},
];

export function getFaq(lang: Lang): FaqEntry[] {
	return lang === 'en' ? EN : FR;
}
