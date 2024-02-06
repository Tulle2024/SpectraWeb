import Aboutsection from "./components/Aboutsection";
import Contactsection from "./components/Contactsection";
import Herosection from "./components/Herosection";
import ServicesSection from "./components/ServicesSection";
import Image from "next/image";
import "./styles/page.modules.sass";

export default function Home() {
	return (
		<main className="main-wrapper">
			<Herosection />
			<Aboutsection />
			<ServicesSection />
			<Contactsection />
		</main>
	);
}
