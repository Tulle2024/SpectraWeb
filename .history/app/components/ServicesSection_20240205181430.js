import Logo1 from "../assets/network1.png";
import Logo2 from "../assets/network2.png";
import Logo3 from "../assets/network3.png";
import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			logo: {Logo1},
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
							src={service.logo}
							alt='Spectratel logo'
							width={70} //in px
							quality={100} //default 80?
							placeholder='blur' //when loading
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
