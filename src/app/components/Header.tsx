'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import "@styles/globals.scss"
import "@styles/ft-hd/header.scss"
import { LinksRefferals } from './LinkRefferals';
import { useEffect } from 'react';
import Image from 'next/image';

const { siteLinks, phonemail, socialLinks } = LinksRefferals();

const Header = () => {
	
	const goToTopOfPage = () => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth'
		});
	};

	useEffect(() => {
		const navbar = document.querySelector(".headerr");
		const mobileNavbar = document.querySelector(".mobile-navbar");
		const hamburger = document.querySelector(".dots-hamburger");
		const offsideMenu = document.querySelector(".offside-menu");
	  
		const handleScroll = () => {
		  const isVisible = navbar && window.getComputedStyle(navbar).display !== "none";
		  const mobileNavbarVisible = mobileNavbar && window.getComputedStyle(mobileNavbar).display !== "none";
	  
		  if (isVisible && !mobileNavbarVisible) {
			if (window.scrollY > 50) {
			  navbar.classList.add("moved");
			} else {
			  navbar.classList.remove("moved");
			}
		  }
		};
	  
		const handleClick = () => {
		  if (hamburger && offsideMenu) {
			hamburger.classList.toggle("active");
			offsideMenu.classList.toggle("visible");
		  }
		};
	  
		const handleClickOutside = (e: MouseEvent) => {
			if (
			  offsideMenu &&
			  !offsideMenu.contains(e.target as Node) &&
			  hamburger &&
			  !hamburger.contains(e.target as Node)
			) {
			  offsideMenu.classList.remove("visible");
			  hamburger.classList.remove("active");
			}
		};
		  
	  
		window.addEventListener("scroll", handleScroll);
		document.addEventListener("click", handleClickOutside);
		if (hamburger) {
		  hamburger.addEventListener("click", handleClick);
		}
	  
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		  document.removeEventListener("click", handleClickOutside);
		  if (hamburger) {
			hamburger.removeEventListener("click", handleClick);
		  }
		};
	}, []);
	  
	const closeMobileMenu = () => {
		const hamburger = document.querySelector(".dots-hamburger");
		const offsideMenu = document.querySelector(".offside-menu");
	  
		if (hamburger && offsideMenu) {
		  hamburger.classList.remove("active");
		  offsideMenu.classList.remove("visible");
		}
	};

	const pathName = usePathname();

	return (
		<header className='headerr'>
			{/* Desktop navbar components */}
			<div className="desktop-navbar">
				<div className="header-top-container">
					<div className='flex'>
						{phonemail.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="flex items-center align-center mb-3 mx-5 translate-transition"
							>
								<Image src={link.src} alt={link.alt} width={24} height={24} className='small-img invert' />
								<p className='mx-3'>{link.text}</p>
							</a>
						))}
					</div>
					<div>
						{socialLinks.map((link) => (
							<a href={link.href} key={link.href}>
								<Image src={link.src} alt={link.alt} width={24} height={24} className="mx-2 small-img invert translate-transition"/>
							</a>
						))}
					</div>
				</div>
				<div className="header-bottom-container">
					<nav className="navbar">
						{siteLinks.map((link, idx) => {
							const isActive = pathName === link.href;
							return (
								<Link
									key={`${link.href}-${idx}`}
									href={link.href}
									className={`link ${isActive ? "link--active" : "link--inactive"}`}
								>
									<p className='mx-5'>{link.text}</p>
								</Link>
							);
						})}
					</nav>
					{pathName !== "/contact" &&
						<a href="/contact">
							<button className='translate-transition'>
								Napisz do nas{' '}
								<Image 
									src="/arrow.svg" 
									alt="ikonka strzałki" 
									width={16} 
									height={16} 
									className='small-img invert rotate-225' 
								/>
							</button>
						</a>
					}
				</div>
			</div>
			
			{/* Mobile navbar components */}
			<div className="mobile-navbar">

				<div className="mobile-main-container">
					<button className="go-up-button" onClick={goToTopOfPage}>
						<Image src="/goup.svg" alt="go-up icon" width={24} height={24} className='small-img m-0 p-0 invert cursor-pointer' />
					</button>
					<Link key="home" href={"/"} className='go-home-button'>
						<Image src="/home.svg" alt="home icon" width={24} height={24} className='small-img invert' />
					</Link>
					<div className='dots-hamburger'>
						<div className='dots-wrapper flex justify-center'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='offside-menu'>
						<div>
							<Image src="/icon.svg" alt="Business Logo" width={48} height={48} />
						</div>
						<div className="links-wrapper">
							{siteLinks.map((link) => (
								<Link
									href={link.href}
									key={link.href}
									className='link-container'
									onClick={closeMobileMenu}
								>
									<p>
										<span className="offside-heading">{link.text}</span><br />
										<span className="offside-description">{link.description}</span>
									</p>
									<Image src={link.icon} alt={link.href} width={24} height={24} className='small-img invert' />
								</Link>
							))}
						</div>
						<p>Zapraszamy częściej!<br />SERWIS I.T</p>
					</div>
				</div>

			</div>

		</header>
	)
}

export default Header;
