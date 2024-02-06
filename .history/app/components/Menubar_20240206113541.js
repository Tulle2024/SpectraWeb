'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/logo-white.png';
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
				{/* <Image
					src={Logo}
					alt='Spectratel logo'
					width={70} //in px
					quality={100} //default 80?
					placeholder='blur' //when loading
				/> */}
				<p className="nav__logo-name">SpectraTel</p>
			</div>
			<nav className="nav__menu">
				<Link href="/">Strona główna</Link>
				<Link href="/">O nas</Link>
				<Link href="/">Uslugi</Link>
				<Link href="/">Kontakt</Link>
			</nav>
		</div>
	)
}
