import propTypes from 'prop-types';
import style from './Layout.module.css';

export const Layout = ({children}) =>
  <div className={style.container}>{children}</div>;

Layout.propTypes = {
  children: propTypes.object,
};
