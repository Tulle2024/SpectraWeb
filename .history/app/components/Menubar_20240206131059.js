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

	const smoothScrollTo = (e, id) => {
		e.preventDefault();
		document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

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
				<Link href="#hero" onClick={(e) => smoothScrollTo(e,"hero")}>Strona główna</Link>
				<Link href="#about" onClick={(e) => smoothScrollTo(e,"about")}>O nas</Link>
				<Link href="#services" onClick={(e) => smoothScrollTo(e,"services")}>Uslugi</Link>
				<Link href="#contact" onClick={(e) => smoothScrollTo(e,"contact")}>Kontakt</Link>
			</nav>
		</div>
	)
}
