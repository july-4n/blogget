import style from './Rating.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../../UI/Text';

const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'></button>
    <Text
      As="p"
      size={12}
      tsize={16}
      color='grey99'
      fontWeight='bold'
      className={style.ups}>{ups}
    </Text>
    <button className={style.down} aria-label='Уменьшить рейтинг'></button>
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};

export default Rating;
