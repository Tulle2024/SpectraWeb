import Image from 'next/image';
import '../styles/hero.modules.sass';

export default function Herosection() {
	return (
		<div className="hero-section">
			<div className="hero-section__main-box">
				<div className="hero-section__main-box--bottom-lines">
					<Image
						alt='Spectratel logo'
						className="hero-section__logo"
						src="/logo-white4.png"
						width={644}
						height={311}
						quality={100}
					/>
					<h2 className="hero-section__company">SpectraTel</h2>
					<p className="hero-section__sentence">Kompleksowa obsługa wież telekomunikacyjnych</p>
					<button className="hero-section__main-button">Skontaktuj się z nami</button>
				</div>
			</div>
		</div>
	)
}
