import '../styles/hero.modules.sass';

export default function Herosection() {
	return (
		<div className="hero-section">
			<div className="hero-section__main-box">
				{/* logo */}
				<h2 className="hero-section__company">SpectraTel</h2>
				<p className="hero-section__sentence">Kompleksowa obsługa wież telekomunikacyjnych</p>
				<button className="hero-section__main-button">Skontaktuj się z nami</button>
			</div>
		</div>
	)
}
