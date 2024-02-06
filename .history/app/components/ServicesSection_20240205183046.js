import Image from 'next/image';
import Logo1 from "/network1.png";
import Logo2 from "/network2.png";
import Logo3 from "/network3.png";
import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			logo: "/network1.png",
			header: "aaaa",
			description: "aaaaaaaaaa",
		},
		{
			id: 2,
			logo: "/network2.png",
			header: "bbb",
			description: "bbbbbbbb",
		},
		{
			id: 3,
			logo: "/network3.png",
			header: "ccc",
			description: "cccccccccc",
		},
	];

	return (
		<div className="services-section">
			{Services.map(service => (
				<div className="services-section__block" key={service.id}>
					<div className="services-section__text">
						<Image
							alt='vector drawing with network'
							className="services-section__logo"
							width= {512}
							height={512}
							quality={100} //default 80?
							src={service.logo}
						/>
						<h3 className="services-section__header">{service.header}</h3>
						<p className="services-section__description">{service.description}</p>
					</div>
					<div className="services-section__image"></div>
				</div>
			))}
		</div>
	)
}
