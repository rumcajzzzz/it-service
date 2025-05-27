import "@styles/globals.scss"
import '@styles/landing-page/landing-page.scss';
import ReviewCarousel from "@components/ReviewSlider";

export default function Home() {
  return (
    <main>

      <section className="hero-section">
        <div className="hero-text container fade-in-on-scroll">
          <h1>ROZWIĄZANIA TECHNOLOGICZNE BEZPROBLEMOWO</h1>
          <p>Profesjonalne usługi IT, naprawa komputerów i wsparcie techniczne.</p>
          <a href="/contact"><button className="translate-transition fade-in-on-scroll">KONTAKT</button></a>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Nasze Usługi</h2>
          <div className="services-grid">
            <div className="service-card fade-in-on-scroll">
              <span>🛠️</span>
              <h3>Czyszczenie i konserwacja</h3>
              <p>Usuwanie kurzu, wymiana pasty termoprzewodzącej, przegląd podzespołów.</p>
            </div>
            <div className="service-card fade-in-on-scroll">
              <span>💾</span>
              <h3>Odzyskiwanie danych</h3>
              <p>Odzyskujemy utracone pliki z dysków HDD, SSD, pendrive’ów i kart SD.</p>
            </div>
            <div className="service-card fade-in-on-scroll">
              <span>💻</span>
              <h3>Instalacja systemu</h3>
              <p>Instalacja i konfiguracja systemów Windows, Linux lub macOS.</p>
            </div>

          </div>
          <a href="/offer"><button className="services-p3 translate-transition">Zobacz wszystkie nasze usługi!</button></a>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2 className="why-us-title fade-in-on-scroll">Dlaczego my?</h2>
          <div className="why-us-block fade-in-on-scroll">
            <div className="why-us-text">
              <h3>Doświadczenie, na którym możesz polegać</h3>
              <p>
                Od lat pomagamy klientom przywracać sprawność ich komputerom i laptopom. Nasz zespół to doświadczeni technicy z pasją do technologii.
              </p>
            </div>
            <div className="why-us-image zoom-hover">
              <img src="/work1.jpg" alt="Technik naprawia komputer" />
            </div>
          </div>

          <div className="why-us-block fade-in-on-scroll">
            <div className="why-us-text">
              <h3>Szybkość i jakość</h3>
              <p>
                Działamy szybko i skutecznie – większość napraw realizujemy w ciągu 24–48h, bez kompromisów w jakości.
              </p>
            </div>
            <div className="why-us-image zoom-hover">
              <img src="/work2.jpg" alt="Serwis komputerowy w trakcie pracy" />
            </div>
          </div>
        </div>
      </section>
      
      
      <ReviewCarousel/>

      <section className="faq-section">
        <div className="container faq-wrapper fade-in-on-scroll">
          <h2 className="faq-title">Najczęściej zadawane pytania</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Ile trwa standardowa naprawa laptopa?</h3>
              <p className="faq-answer">Większość napraw realizujemy w ciągu 24–48 godzin, w zależności od rodzaju usterki.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Czy muszę umawiać się wcześniej?</h3>
              <p className="faq-answer">Nie jest to konieczne – zapraszamy w godzinach otwarcia. Umawianie się wcześniej przyspiesza proces diagnozy.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Czy odzyskacie dane z uszkodzonego dysku?</h3>
              <p className="faq-answer">Tak, posiadamy specjalistyczne narzędzia do odzyskiwania danych z dysków HDD, SSD i pendrive’ów.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Czy oferujecie dojazd do klienta?</h3>
              <p className="faq-answer">Tak, na terenie miasta oferujemy usługę dojazdu do klienta po wcześniejszym ustaleniu terminu.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Czy mogę zostawić komputer na diagnozę?</h3>
              <p className="faq-answer">Tak. Diagnoza jest bezpłatna, a po niej otrzymasz kosztorys i termin wykonania usługi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="contact-title">Skontaktuj się z nami!</h2>
          <a href="/contact"><button className="contact-button translate-transition">Kontakt</button></a>
        </div>
      </section>

    </main>
  );
}
