import { useLang } from '@/lib/i18n';

export function Hero() {
	const { tr } = useLang();
	return (
		<section className="rail hero-wrap">
			<div className="hero">
				<img className="hero-image" src="/images/studio-hex.webp" alt="Gym Room studio privé à Versoix" />
				<div className="hero-shade" />
				<div className="hero-content">
					<div className="tags">
						<span>{tr('Versoix', 'Versoix')}</span>
						<span>{tr('Studio privé', 'Private studio')}</span>
						<span>{tr('Coaching sur rendez-vous', 'Coaching by appointment')}</span>
					</div>
					<div className="hero-bottom">
						<div className="hero-copy">
							<p className="eyebrow">Gym Room</p>
							<h1 className="hero-title">
								<span>{tr('petit espace.', 'small space.')}</span>
								<span>{tr('grand impact.', 'big impact.')}</span>
							</h1>
							<p className="intro">
								{tr(
									'Gym Room est un studio privé à Versoix dédié au coaching, au testing et à la location de studio pour coachs. Réserve ton créneau et profite d’un cadre plus calme, plus précis et plus personnel.',
									'Gym Room is a private studio in Versoix dedicated to coaching, testing and studio rental for coaches. Book your slot and enjoy a calmer, more precise and more personal setting.',
								)}
							</p>
							<div className="buttons">
								<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver une séance', 'Book a session')}</a>
								<a className="button glass" href="https://wa.me/41767124806" target="_blank" rel="noreferrer">{tr('Contacter Gym Room', 'Contact Gym Room')}</a>
							</div>
						</div>
						<aside className="studio-panel">
							<p className="eyebrow">{tr('Studio', 'Studio')}</p>
							<h2>Avenue Choiseul 19a</h2>
							<p><a href="tel:+41767124806">076 712 48 06</a><br />24/7<br />{tr('Sur rendez-vous uniquement', 'By appointment only')}</p>
							<a href="#contact">{tr('Voir les infos de contact', 'See contact info')}</a>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
}
