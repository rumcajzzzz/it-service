'use client';
import "@styles/globals.scss";
import "@styles/contact-page/contact-page.scss";

export default function ContactPage() {
  return (
    <main>

      <section className="cp-contact-section">
        <div className="cp-wrapper container fade-in-on-scroll">

          <div className="cp-text-side">
            <h2 className="cp-title">
              <span className="cp-blue-bar" />
              SKONTAKTUJ SIĘ Z NAMI
            </h2>
            <p>
              Masz pytanie, potrzebujesz pomocy technicznej lub chcesz umówić wizytę? 
              Skontaktuj się z nami - jesteśmy gotowi pomóc!
            </p>
            <section id="cp-contact-form" className="cp-contact-form-section">
              <form className="cp-contact-form">
                <input type="text" placeholder="Imię i nazwisko" required />
                <input type="email" placeholder="Adres e-mail" required />
                <textarea placeholder="Twoja wiadomość..." required></textarea>
                <button type="submit">Wyślij</button>
              </form>
            </section>
          </div>
          <div className="cp-image-side">
            <img src="/contactbg.jpg" alt="Kontakt z firmą" />
          </div>

        </div>

      </section>

    </main>
  );
}
