import propTypes from 'prop-types';
import style from './Heading.module.css';
import {Text} from '../../../UI/Text/Text';

export const Heading = ({heading}) =>
  <Text
    As= 'h1'
    size={22}
    tsize={26}
    center
    className={style.heading}>
    {heading ? heading : ''}
  </Text>;

Heading.propTypes = {
  heading: propTypes.string,
};
