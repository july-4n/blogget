import style from './Preview.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Preview = ({title}) => (
  <img className={style.img} src={notphoto} alt={title}/>
);

Preview.propTypes = {
  title: PropTypes.string,
};

export default Preview;
