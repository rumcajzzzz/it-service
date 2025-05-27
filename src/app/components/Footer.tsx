'use client'
import { LinksRefferals } from '@components/LinkRefferals';
import "@styles/globals.scss"
import "@styles/ft-hd/footer.scss"
import Image from 'next/image';

const { phonemail, socialLinks } = LinksRefferals();

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact flex">
          {phonemail.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer-contact-link flex translate-transition"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={24}
                height={24}
                className="small-img invert"
              />
              <p className='text-right'>{link.text}</p>
            </a>
          ))}
        </div>
        <div className="footer-social">
          <div className="footer-social-links">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="footer-social-icon translate-transition"
              >
                 <Image
                  src={link.src}
                  alt={link.alt}
                  width={24}
                  height={24}
                  className="small-img invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} rumcajs&#39;s dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
