import React from 'react';
import { TweenMax } from 'gsap';
import Link from '../Link';
import s from './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={s.navigation} id="navigation" role="navigation">
        <ul className={s.navigation__list}>
          <li className={s.navigation__item}><Link className={s.navigation__link} to="/archives">Archives</Link></li>
          <li className={s.navigation__item}><Link className={s.navigation__link} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
