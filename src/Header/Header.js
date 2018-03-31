import React from 'react';
import './Header.css';

const Header = () => (
  <header>
	<div className="logo-text float-left">CRAZY NAILS studio <small>&#8482;</small></div>
    <nav id="menu">
      <ul>
        <li><a href='#home'>ГЛАВНАЯ</a></li>
        <li><a href='#services'>УСЛУГИ</a></li>
        <li><a href=''>ПРАЙС-ЛИСТ</a></li>
        <li><a href='#experts'>ОБО МНЕ</a></li>
        <li><a href='#testimonials'>ОТЗЫВЫ</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;