import { useState } from 'react';
import type { Route } from './+types/faq';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { getFaq } from '@/data/faq';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	const faqEntries = getFaq('fr');
	return seo({ matches, location }, {
		title: 'FAQ — questions fréquentes | Gym Room',
		description: 'Retrouve les réponses aux questions les plus courantes sur les services, la réservation, les horaires et les conditions chez Gym Room.',
		image: '/images/studio-hex.webp',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqEntries.map(item => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: { '@type': 'Answer', text: item.answer },
			})),
		},
	});
}

export default function FaqPage() {
	const { lang, tr } = useLang();
	const faqEntries = getFaq(lang);
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<main>
			<section className="rail page-hero-text">
				<p className="eyebrow">FAQ</p>
				<h1>{tr('questions fréquentes', 'frequently asked questions')}</h1>
				<p className="page-hero-intro">{tr(
					'Retrouve les réponses aux questions les plus courantes sur les services, la réservation, les horaires et les conditions chez Gym Room.',
					'Find answers to the most common questions about services, booking, hours and conditions at Gym Room.',
				)}</p>
			</section>
			<Reveal direction="left">
			<section className="rail page-section">
				<div className="faq-list">
					{faqEntries.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<div
								className={`faq-item${isOpen ? ' is-open' : ''}`}
								key={item.question}
							>
								<button
									type="button"
									className="faq-summary"
									aria-expanded={isOpen}
									onClick={() => setOpenIndex(isOpen ? null : index)}
								>
									<span>{item.question}</span>
								</button>
								{isOpen && (
									<p>{item.answer}</p>
								)}
							</div>
						);
					})}
				</div>
			</section>
			</Reveal>
		</main>
	);
}
