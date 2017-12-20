import React, { PropTypes } from 'react';
import s from './Header.css';

class Header extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
  };

  componentDidMount() {
  }

  render() {
    return (
      <header className={s.header} id="header" role="banner">
        <h1>Wicked<br />Currency<br />Converter</h1>
      </header>
    );
  }

}

export default Header;
