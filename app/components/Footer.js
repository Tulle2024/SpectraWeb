import "../styles/footer.modules.sass";

export default function Footer() {
	return (
		<div className="footer-section" id="footer">
			<h4 className="footer-section__company">Spectratel Sp. z o.o.</h4>
			<div className="footer-section__contact">
				<h5 className="footer-section__contact--title">Kontakt</h5>
				<p className="footer-section__contact--adress">Adres:<br />ul. Firmowa 10/11<br />03-534 Warszawa</p>
				<p className="footer-section__contact--further">Telefon: +48 123 456 789<br />E-mail: kontakt@spectratel.com.pl</p>
			</div>
		</div>
	)
}
