import React from 'react';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={`${s.footer} clear u-text-right`} role="contentinfo">
      <h2 className={s.footer__title}><a href="/"><img src="/images/common/footer-logo.svg" alt="Worlders" /></a></h2>
      <div className={s.footerSocial}>
        <span className={s.footerSocial__head}>Follow us on</span>
        <ul className={s.footerSocial__list}>
          <li className={s.footerSocial__item}>
            <a
              className="icon icon--facebook"
              href="https://www.facebook.com/Worlder-1297624110354850/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
