import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			logo: "",
			header: "aaaa",
			description: "aaaaaaaaaa",
		},
		{
			id: 2,
			logo: "",
			header: "bbb",
			description: "bbbbbbbb",
		},
		{
			id: 3,
			logo: "",
			header: "ccc",
			description: "cccccccccc",
		},
	];

	return (
		<div className="services-section">
			{Services.map(service => (
				<div className="services-section__block" key={service.id}>
					<div className="services-section__text">
						{/* logo */}
						<h3 className="services-section__header">{service.header}</h3>
						<p className="services-section__description">{service.description}</p>
					</div>
					<div className="services-section__image"></div>
				</div>
			))}
		</div>
	)
}
