type PageHeroProps = {
	eyebrow: string;
	title: string;
	intro?: string;
	image?: string;
	motto?: string;
};

export function PageHero({ eyebrow, title, intro, image, motto }: PageHeroProps) {
	if (image) {
		return (
			<section className="rail page-hero-wrap">
				<div className="page-hero">
					<img className="hero-image" src={image} alt="" />
					<div className="hero-shade" />
					<div className="hero-content page-hero-content">
						<p className="eyebrow">{eyebrow}</p>
						<div>
							<h1>{title}</h1>
							{intro ? <p className="page-hero-intro">{intro}</p> : null}
							{motto ? <p className="page-hero-motto">{motto}</p> : null}
						</div>
					</div>
				</div>
			</section>
		);
	}
	return (
		<section className="rail page-hero-text">
			<p className="eyebrow">{eyebrow}</p>
			<h1>{title}</h1>
			{intro ? <p className="page-hero-intro">{intro}</p> : null}
		</section>
	);
}
