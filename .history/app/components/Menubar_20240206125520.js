'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/menu.modules.sass';

export default function Menubar() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	return (
		<div className={`nav ${scrollPosition > 1 ? 'scrolled' : ''}`}>
			<div className="nav__logo">
				<Image
					alt='Spectratel logo'
					className="nav__logo-img"
					src="/logo-white4.png"
					width={644}
					height={311}
					quality={100}
				/>
				<p className="nav__logo-name">SpectraTel</p>
			</div>
			<nav className="nav__menu">
				<Link href="#hero" onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
          }}>Strona główna</Link>
				<Link href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }}>O nas</Link>
				<Link href="#services" onClick={(e) => {
            e.preventDefault();
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
          }}>Uslugi</Link>
				<Link href="#contact">Kontakt</Link>
			</nav>
		</div>
	)
}
