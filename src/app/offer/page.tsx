'use client';
import "@styles/globals.scss"
import '@styles/offer-page/offer-page.scss';

export default function Services() {
	return (
	  <main>
		<div className="hero-wrapper">
			<section className="services-hero container fade-in-on-scroll">
			  <h2 className="title">
				<span className="blue-bar" />
				NASZE USŁUGI
			  </h2>
			  <p>
				Oferujemy kompleksowe wsparcie technologiczne dla osób prywatnych i firm. Nasze usługi obejmują zarówno naprawy sprzętowe, jak i rozbudowane rozwiązania IT.
			  </p>
			  <a href="#service-block" className="text-white"><img src="arrow.svg" alt="arrowdown icon" className="small-img invert"/></a>
			</section>
		</div>
  
		<div className="highlighted-services-wrapper">
			<section className="highlighted-services container">
				<div className="service-block fade-in-on-scroll" id="service-block">
					<div className="text">
						<h3>Serwis i naprawa komputerów</h3>
						<p>
						<span className="highlight">Diagnostyka</span>, <span className="highlight">czyszczenie</span>, 
						<span className="highlight">wymiana podzespołów</span>, <span className="highlight">odzyskiwanie danych</span> i inne. 
						Zadbamy o Twój sprzęt jak o <span className="highlight">własny</span>.
						</p>
					</div>
					<div className="image">
						<img src="/servicerepair.jpg" alt="Naprawa komputera" />
					</div>
				</div>

				<div className="service-block reverse fade-in-on-scroll">
					<div className="text">
						<h3>Wsparcie zdalne i doradztwo IT</h3>
						<p>
						<span className="highlight">Szybka pomoc techniczna</span> przez Internet oraz 
						<span className="highlight">doradztwo</span> w wyborze sprzętu i oprogramowania – 
						dla <span className="highlight">domu</span> i <span className="highlight">biznesu</span>.
						</p>
					</div>
					<div className="image">
						<img src="/service-remote.jpg" alt="Wsparcie zdalne" />
					</div>
				</div>

				<div className="service-block fade-in-on-scroll">
					<div className="text">
						<h3>Konserwacja i optymalizacja systemów</h3>
						<p>
						Sprawimy, że Twój system będzie działać <span className="highlight">szybciej</span> i <span className="highlight">bezpieczniej</span>. 
						<span className="highlight">Regularne przeglądy</span> to <span className="highlight">dłuższa żywotność sprzętu</span>.
						</p>
					</div>
					<div className="image">
						<img src="/service-maintenance.jpg" alt="Konserwacja" />
					</div>
				</div>

			</section>
		</div>
  
		{/* Pozostałe usługi w kartach */}
		<section className="other-services container">
		  <h3 className="section-title">
			<span className="blue-bar" />
			POZOSTAŁE USŁUGI
		  </h3>
		  <div className="services-grid fade-in-on-scroll">
			<div className="card">
			  <img src="/website.svg" alt="Tworzenie stron" />
			  <h4>Tworzenie stron WWW</h4>
			  <p>Projektujemy nowoczesne, responsywne strony internetowe dostosowane do Twoich potrzeb.</p>
			</div>
			<div className="card">
			  <img src="/malware.svg" alt="Usuwanie wirusów" />
			  <h4>Usuwanie wirusów</h4>
			  <p>Bezpieczne czyszczenie systemu i przywracanie pełnej funkcjonalności urządzenia.</p>
			</div>
			<div className="card">
			  <img src="/network.svg" alt="Instalacja sieci" />
			  <h4>Instalacja sieci domowej</h4>
			  <p>Konfiguracja routerów, Wi-Fi, kabli i zabezpieczeń sieciowych dla Twojego domu lub biura.</p>
			</div>
			<div className="card">
			  <img src="/software.svg" alt="Instalacja oprogramowania" />
			  <h4>Instalacja oprogramowania</h4>
			  <p>Legalne instalacje systemów, pakietów biurowych, sterowników i aplikacji specjalistycznych.</p>
			</div>
		  </div>
		</section>
	  </main>
	);
  }