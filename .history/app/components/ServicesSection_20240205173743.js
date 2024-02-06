import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			image: "",
			logo: "",
			header: "aaaa",
			description: "aaaaaaaaaa",
		},
		{
			id: 2,
			image: "",
			logo: "",
			header: "bbb",
			description: "bbbbbbbb",
		},
		{
			id: 3,
			image: "",
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
