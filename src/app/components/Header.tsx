'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import "@styles/globals.scss"
import "@styles/ft-hd/header.scss"
import { LinksRefferals } from './LinkRefferals';
import { useEffect } from 'react';


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
						{phonemail.map((link) => {
							return(
								<a
									key={`${link.href}`}
									href={link.href}
									className="flex items-center align-center mb-3 mx-5 translate-transition"
								>
									<img src={link.src} alt={link.alt} className='small-img invert'/>
									<p className='mx-3'>{link.text}</p>
								</a>
							)
						})}
					</div>
					<div>
						{socialLinks.map((link) => {
							return(
								<a href={link.href} key={link.href}>
									<img
										src={link.src}
										alt={link.alt}
										className="mx-2 small-img invert translate-transition"
									/>
								</a>
							)
						})}
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
									{<p className='mx-5'>{link.text}</p>}
								</Link>
							);
						})}
					</nav>
					{pathName !== "/contact" &&
						<a href="/contact"><button className='translate-transition'>Napisz do nas <img src="/arrow.svg" alt="ikonka strzałki" className='small-img invert rotate-225'/></button></a>
					}
				</div>
			</div>
			
			{/* Mobile navbar components */}
			<div className="mobile-navbar">

				<div className="mobile-main-container">
					<button className="go-up-button" onClick={goToTopOfPage}><img src="/goup.svg" alt="" className='small-img m-0 p-0 invert cursor-pointer'/></button>
					<Link
						key="home"
						href={"/"}
						className='go-home-button'
					>
						<img src="/home.svg" alt="home icon" className='small-img invert'/>
					</Link>
					<div className='dots-hamburger'>
						<div className='dots-wrapper flex justify-center'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='offside-menu'>
						<div><img src="/icon.svg" alt="Business Logo"/></div>
						<div className="links-wrapper">
							{siteLinks.map( (link) => {
								return (
									<Link
										href={link.href}
										key={link.href}
										className='link-container'
										onClick={closeMobileMenu}
									>
										<p><span className="offside-heading">{link.text}</span><br></br><span className="offside-description">{link.description}</span></p><img src={link.icon} alt={link.href} className='small-img invert' />
									</Link>
								)
							})}
						</div>
						<p>Zapraszamy częściej!<br></br>SERWIS I.T</p>
					</div>
				</div>

			</div>

		</header>

					
	)
}

export default Header

