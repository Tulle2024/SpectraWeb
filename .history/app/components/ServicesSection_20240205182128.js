import Image from 'next/image';
import Logo1 from "../assets/images/network1.png";
import Logo2 from "../assets/images/network2.png";
import Logo3 from "../assets/images/network3.png";
import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			logo: "../assets/images/network1.png",
			header: "aaaa",
			description: "aaaaaaaaaa",
		},
		{
			id: 2,
			logo: {Logo2},
			header: "bbb",
			description: "bbbbbbbb",
		},
		{
			id: 3,
			logo: {Logo3},
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
