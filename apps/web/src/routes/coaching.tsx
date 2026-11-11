import type { Route } from './+types/coaching';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { FounderBoxes } from '@/components/services/founder-boxes';
import { CoachingPricing } from '@/components/services/coaching-pricing';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Coaching — coaching privé & programme | Gym Room',
		description: 'Coaching présentiel à Versoix et programme online personnalisé via Ekklo. Progresser, à votre rythme, avec un coach diplômé universitaire.',
		image: 'https://www.gym-room.ch/images/coaching-founder.jpg',
	});
}

export default function CoachingPage() {
	const { tr } = useLang();
	const programmeIncludes = [
		tr('Photos et vidéos de chaque exercice', 'Photos and videos of each exercise'),
		tr('Temps de repos et charges détaillés', 'Detailed rest times and loads'),
		tr('Suivi des exercices effectués directement dans l’app', 'Track completed exercises directly in the app'),
		tr('Données transmises au coach pour ajustements', 'Data sent to the coach for adjustments'),
		tr('Compatible iOS et Android', 'iOS and Android compatible'),
		tr('Adaptable maison, Gym Room ou autre salle', 'Adaptable at home, Gym Room or another gym'),
	];

	return (
		<main>
			<PageHero
				eyebrow="coaching"
				title={tr('progresser, à votre rythme.', 'progress, at your pace.')}
				intro={tr(
					'En présentiel à Versoix ou à distance via l’application : un accompagnement adapté à votre emploi du temps et à vos objectifs.',
					'In person in Versoix or remotely via the app: support adapted to your schedule and your goals.',
				)}
			/>

			<Reveal direction="left">
			<section className="rail page-section founder-section" id="coaching">
				<div className="founder-top">
					<div className="founder-image">
						<img loading="lazy" src="/images/titouan-williams.webp" alt={tr('Titouan Williams, fondateur et coach', 'Titouan Williams, founder and coach')} />
					</div>
					<div className="founder-body">
						<p className="eyebrow">{tr('présentation', 'about')}</p>
						<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('titouan williams, fondateur et coach.', 'titouan williams, founder and coach.')}</span></h2>
						<p>{tr(
							'Ancien athlète de niveau suisse élite sur 400m et 400m haies. En parallèle de ma carrière dans l’athlétisme, j’ai commencé à entraîner des jeunes partageant la même passion pour ce sport. C’est donc tout naturellement que je me suis formé en Sciences du sport à l’Université de Lausanne (BSc) et auprès de la fédération suisse d’athlétisme (Entraîneur B). J’ai été moniteur J+S au Versoix Athlétisme pendant presque dix ans et coach d’athlétisme à l’École Internationale de Genève (Ecolint).',
							'Former Swiss elite-level athlete over 400m and 400m hurdles. Alongside my athletics career, I started training young people sharing the same passion for the sport. I naturally trained in Sport Science at the University of Lausanne (BSc) and with the Swiss athletics federation (Entraîneur B). I was a J+S instructor at Versoix Athlétisme for almost ten years and an athletics coach at the International School of Geneva (Ecolint).',
						)}</p>
						<p>{tr(
							'En juillet 2025, j’ai ouvert mon propre studio de coaching privé, Gym Room, l’aboutissement d’un rêve. Le studio repose sur le coaching privé ou semi-privé et le programme en ligne. Je propose aussi aux coachs qui souhaitent un cadre premium pour coacher leurs clients la location du studio.',
							'In July 2025, I opened my own private coaching studio, Gym Room, the fulfilment of a dream. The studio is built on private or semi-private coaching and the online programme. I also offer studio rental to coaches who want a premium setting to coach their clients.',
						)}</p>
					</div>
				</div>
				<FounderBoxes />
			</section>
			</Reveal>

			<Reveal direction="right">
			<section className="rail page-section" id="coaching-presentiel">
				<div className="section-heading">
					<p className="eyebrow">{tr('coaching présentiel', 'in-person coaching')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('un entraînement guidé de a à z.', 'a guided workout from a to z.')}</span></h2>
					<p>{tr(
						'Une heure avec votre coach à Versoix, en individuel ou en duo. Approche naturelle du sport, résultats capables de durer dans le temps.',
						'One hour with your coach in Versoix, one-to-one or as a duo. A natural approach to sport, with lasting results.',
					)}</p>
				</div>
				<CoachingPricing />
			</section>
			</Reveal>

			<Reveal direction="left">
			<section className="rail page-section" id="programme">
				<div className="section-heading">
					<p className="eyebrow">{tr('programme (coaching online)', 'programme (online coaching)')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('un programme 100% personnalisé', 'a 100% personalised programme')}</span></h2>
					<p>{tr(
						'Un programme créé après un questionnaire préalable, livré via l’application Ekklo et adapté à votre emploi du temps, votre équipement et vos objectifs.',
						'A programme created after a preliminary questionnaire, delivered via the Ekklo app and adapted to your schedule, equipment and goals.',
					)}</p>
				</div>
				<div className="programme-section programme-3col">
				<div className="programme-image">
					<img loading="lazy" src="https://images.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/2c59ca46-11b2-4622-94b0-6d1b0e4ddd41.png" alt={tr('Téléphone tenu en main affichant le programme d’entraînement personnalisé dans Ekklo', 'Hand holding a phone showing the personalised workout programme in Ekklo')} />
				</div>
				<div className="programme-body">
					<p className="eyebrow">{tr('le principe', 'the idea')}</p>
					<h3 className="programme-title"><span>{tr('votre plan, dans votre poche.', 'your plan, in your pocket.')}</span></h3>
					<p>{tr(
						'Le questionnaire pose le cadre. Ekklo livre ensuite chaque séance : photos, vidéos, repos et charges. Vous vous entraînez à la maison, à Gym Room ou dans une autre salle, et le coach ajuste à partir de ce que vous avez réellement fait.',
						'The questionnaire sets the frame. Ekklo then delivers each session: photos, videos, rest and loads. You train at home, at Gym Room or in another gym, and the coach adjusts from what you actually completed.',
					)}</p>
				</div>
				<div className="programme-price">
					<div className="programme-price-top">
						<span className="eyebrow">{tr('À partir de', 'From')}</span>
						<div className="pricing-price"><span className="amount">49.90</span><span className="unit">CHF /{tr('mois', 'month')}</span></div>
						<small>{tr('1 jour d’entraînement inclus, +CHF 10 par jour supplémentaire', '1 training day included, +CHF 10 per extra day')}</small>
					</div>
					<p className="programme-includes-title">{tr('Inclus dans le programme', 'Included in the programme')}</p>
					<ul className="check-list">
						{programmeIncludes.map(item => <li key={item}>{item}</li>)}
					</ul>
					<div className="buttons">
						<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver', 'Book')}</a>
						<a className="button glass" href="/contact">{tr('Contact', 'Contact')}</a>
					</div>
				</div>
				</div>
			</section>
			</Reveal>

			<Reveal direction="right">
			<section className="page-section cta-band">
				<div className="cta-inner cta-split">
					<div className="cta-text">
						<p className="eyebrow"><span style={{ color: 'rgb(255, 255, 255)' }}>{tr('passez à l’action', 'take action')}</span></p>
						<h2>{tr('prêt à réserver votre séance ?', 'ready to book your session?')}</h2>
						<p>{tr(
							'Choisissez un créneau via le système de réservation ou écrivez-nous pour une question précise.',
							'Pick a slot via the booking system or write to us for a specific question.',
						)}</p>
					</div>
					<div className="buttons">
						<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver', 'Book')}</a>
						<a className="button glass" href="/contact">{tr('Contact', 'Contact')}</a>
					</div>
				</div>
			</section>
			</Reveal>
		</main>
	);
}
