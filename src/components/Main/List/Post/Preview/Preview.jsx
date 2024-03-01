import style from './Preview.module.css';
import {useState} from 'react';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

const Preview = ({thumbnail, title}) => {
  const [isImageLoadError, setIsImageLoadError] = useState(false);
  const regURL = /^https?:\/\//;
  const imgURL = regURL.test(thumbnail) ? thumbnail : notphoto;

  return (
    <img
      src={isImageLoadError ? notphoto : imgURL}
      className={style.img}
      alt={title}
      onError={() => setIsImageLoadError(true)}
    />
  );
};

Preview.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};


export default Preview;
