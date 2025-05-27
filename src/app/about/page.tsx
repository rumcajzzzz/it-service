'use client';
import "@styles/globals.scss"
import '@styles/about-page/about-page.scss';
import Image from "next/image";

export default function About() {
  return (
    <main>

      <section className="about-section">
        <div className="wrapper container ">
          <div className="text-side fade-in-on-scroll">
            <h2 className="title">
              <span className="blue-bar" />
              KIM JESTEŚMY?
            </h2>
            <p>
              TechCare Solutions to firma założona w 2010 roku, która od ponad dekady świadczy usługi naprawy i wsparcia technologicznego. Naszą pasją do technologii oraz chęć pomocy innym sprawiły, że staliśmy się liderem w branży IT. Oferujemy szeroki zakres usług, w tym naprawy komputerów, konserwacje sprzętu, diagnostykę oraz wsparcie techniczne. Nasz zespół składa się z wysoce wykwalifikowanych specjalistów, którzy nieustannie podnoszą swoje umiejętności, aby dostarczać klientom najlepsze rozwiązania. Jesteśmy tu, aby pomóc Ci z łatwością poruszać się po świecie technologii i zapewnić wsparcie w każdej sytuacji.
            </p>
          </div>
          <div className="image-side fade-in-on-scroll">
            <Image
                src="/aboutbg.jpg"
                alt="Naprawa komputera"
                width={600}
                height={400}
                className=""
              />
          </div>
        </div>
        <a href="#stats-block" className="text-white fade-in-on-scroll">
          <Image
            src="/arrow.svg"
            alt="arrowdown icon"
            width={24}
            height={24}
            className="small-img invert my-10"
          />
        </a>
      </section>

      <section className="stats-wrapper" id="stats-block">
        <div className="stats-section">
          <div className="container stats-container  fade-in-on-scroll">
            <div className="stat">
              <div className="odometer number" data-value="12">0</div>
              <div className="label">Lata doświadczenia zawodowego</div>
            </div>
            <div className="stat">
              <div className="odometer number" data-value="8">0</div>
              <div className="label">Otrzymane nagrody</div>
            </div>
            <div className="stat">
              <div className="odometer number" data-value="1000">0</div>
              <div className="label">Szczęśliwi klienci</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section container">
        <h3 className="title">
          <span className="blue-bar" />
          OPINIA KLIENTÓW.
        </h3>
        <div className="testimonials fade-in-on-scroll">
          <article className="testimonial">
              <Image
                src="/abouttest.png"
                alt="Jan"
                width={80}
                height={80}
                className="avatar"
              />
            <h4>Jan</h4>
            <p className="quote">
              TechCare Solutions uratowało moją firmę, ich szybkie reakcje i wiedza są godne polecania.
            </p>
          </article>
          <article className="testimonial">
              <Image
                src="/abouttest.png"
                alt="Michal"
                width={80}
                height={80}
                className="avatar"
              />
            <h4>Michał</h4>
            <p className="quote">
              Miałem problem z laptopem, który wydawał się niemożliwy do naprawienia, ale zespół poradził sobie.
            </p>
          </article>
          <article className="testimonial">
            <Image
                src="/abouttest.png"
                alt="Dawid"
                width={80}
                height={80}
                className="avatar"
              />
            <h4>David</h4>
            <p className="quote">
              Korzystałem z TechCare Solutions do potrzeb osobistych i biznesowych. Zaufam im całkowicie.
            </p>
          </article>
        </div>
      </section>

    </main>
  );
}