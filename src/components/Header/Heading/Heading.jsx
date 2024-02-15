import propTypes from 'prop-types';
import style from './Heading.module.css';

export const Heading = ({heading}) => <h1 className={style.heading}>
  {heading ? heading : ''}
</h1>;

Heading.propTypes = {
  heading: propTypes.string,
};

