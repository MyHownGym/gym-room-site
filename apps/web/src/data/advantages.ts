import type { Lang } from '@/lib/i18n';

export type Advantage = {
	title: string;
	image: string;
	path: string;
	text: string;
};

const FR: Advantage[] = [
	{
		title: 'coaching',
		image: '/images/titouan-williams.webp',
		path: 'coaching#coaching',
		text: 'Un coach diplômé universitaire (BSc en sciences du sport) : anatomie, physiologie, biomécanique et psychologie du sport font partie du cursus suivi.',
	},
	{
		title: 'location coach',
		image: '/images/coaching-studio.webp',
		path: 'location-coach',
		text: 'Un studio privé et bien équipé, à louer pour les coachs indépendants qui veulent un cadre premium pour leurs clients.',
	},
	{
		title: 'programme',
		image: 'https://images.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/2c59ca46-11b2-4622-94b0-6d1b0e4ddd41.png',
		path: 'coaching#programme',
		text: 'Un programme online 100% personnalisé, créé sur mesure après un questionnaire préalable. Livré via l’application Ekklo, adapté à votre emploi du temps, votre équipement et vos objectifs.',
	},
	{
		title: 'gym lab',
		image: '/images/gym-lab-sprint.webp',
		path: 'gym-lab',
		text: 'Des appareils de mesure précis pour se tester et s’entraîner avec précision.',
	},
];

const EN: Advantage[] = [
	{
		title: 'coaching',
		image: '/images/titouan-williams.webp',
		path: 'coaching#coaching',
		text: 'A university-educated coach (BSc in sport science): anatomy, physiology, biomechanics and sport psychology are all part of the curriculum.',
	},
	{
		title: 'studio rental',
		image: '/images/coaching-studio.webp',
		path: 'location-coach',
		text: 'A private, well-equipped studio to rent for independent coaches who want a premium setting for their clients.',
	},
	{
		title: 'programme',
		image: 'https://images.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/2c59ca46-11b2-4622-94b0-6d1b0e4ddd41.png',
		path: 'coaching#programme',
		text: 'A 100% personalised online programme, built to measure after a preliminary questionnaire. Delivered via the Ekklo app, adapted to your schedule, equipment and goals.',
	},
	{
		title: 'gym lab',
		image: '/images/gym-lab-sprint.webp',
		path: 'gym-lab',
		text: 'Precise measurement devices to test yourself and train with accuracy.',
	},
];

export function getAdvantages(lang: Lang): Advantage[] {
	return lang === 'en' ? EN : FR;
}
