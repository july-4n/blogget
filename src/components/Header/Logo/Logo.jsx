import style from './Logo.module.css';
// import {ReactComponent as LogoIcon} from './img/logo.svg';
import logo from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <img className={style.logo} src={logo} alt='Логотип'/>
  </a>
);
