import style from './Rating.module.css';
import PropTypes from 'prop-types';

const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'></button>
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Уменьшить рейтинг'></button>
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};

export default Rating;
