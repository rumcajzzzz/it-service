'use client';

export const LinksRefferals = () => {
  const siteLinks = [
    {
      href: "/",
      text: "Strona główna",
      icon: "/home.svg",
      description: "Witamy na naszej stronie!"
    },
    {
      href: "/offer",
      text: "Nasza oferta",
      icon: "/servicesicon.svg",
      description: "Poznaj nasze usługi"
    },
    {
      href: "/about",
      text: "O nas",
      icon: "/abouticon.svg",
      description: "Kim jesteśmy i co robimy"
    },
    {
      href: "/contact",
      text: "Kontakt",
      icon: "/contacticon.svg",
      description: "Skontaktuj się z nami"
    }
  ];  
  
  const phonemail = [
    { href: "/", text: "+48 123 456 789", src: "/phone.svg", alt: "phone-icon" },
    { href: "/", text: "serwisit@gmail.com", src: "/email.svg", alt: "email-icon" }
  ];
  
  const socialLinks = [
    { href: "https://facebook.com", src: "/facebook.svg", alt: "facebook icon" },
    { href: "https://x.com", src: "/twitter.svg", alt: "twitter icon" },
    { href: "https://instagram.com", src: "/instagram.svg", alt: "instagram icon" }
  ];

  return { siteLinks, phonemail, socialLinks };
};
