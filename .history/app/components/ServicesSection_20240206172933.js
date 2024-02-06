import Image from 'next/image';
// import Logo1 from "./network1.png";
// import Logo2 from "./network2.png";
// import Logo3 from "./network3.png";
import "../styles/services.modules.sass";

export default function ServicesSection() {

	const Services = [
		{
			id: 1,
			logo: "./network1.png",
			header: "aaaa",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil doloremque tempore repudiandae facilis dolorum ab cupiditate, porro fugiat, dolores voluptatum! Voluptatem voluptatibus repellendus at iste ab alias eaque officiis. Blanditiis tempore tempora hic corporis maiores dicta ullam esse, architecto aperiam natus, soluta fugiat voluptatem animi commodi in officia. Quaerat aspernatur facilis veritatis nihil perferendis architecto minima amet magnam quos.",
		},
		{
			id: 2,
			logo: "./network2.png",
			header: "Instalacje telekomunikacyjne",
			description: "Oferujemy kompleksowe usługi w zakresie instalacji telekomunikacyjnych marek takich jak: Huawei, Nokia, czy Ericsson, spełniając najwyższe standardy branżowe. Nasza firma specjalizuje się w różnorodnych projektach, obejmujących instalacje anten sektorowych oraz radiolinii, zapewniając efektywną transmisję danych. Zaufaj nam, jeśli poszukujesz partnera, który zapewni profesjonalną obsługę oraz solidne i nowoczesne rozwiązania w dziedzinie instalacji telekomunikacyjnych."
		},
		{
			id: 3,
			logo: "./network3.png",
			header: "Likwidacja istniejących instalacji",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil doloremque tempore repudiandae facilis dolorum ab cupiditate, porro fugiat, dolores voluptatum! Voluptatem voluptatibus repellendus at iste ab alias eaque officiis. Blanditiis tempore tempora hic corporis maiores dicta ullam esse, architecto aperiam natus, soluta fugiat voluptatem animi commodi in officia. Quaerat aspernatur facilis veritatis nihil perferendis architecto minima amet magnam quos."
		},
	];

	return (
		<div className="services-section" id="services">
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
