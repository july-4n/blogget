import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

const Content = ({title, author}) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text
        As='a'
        size={18}
        tsize={24}
        fontWeight='bold'
        className={style.linkPost}
        href='#post'>
        {title}
      </Text>
    </Text>
    <Text
      As='a'
      size={12}
      tsize={14}
      fontWeight='medium'
      color='orange'
      className={style.linkAuthor}
      href='#author'>
      {author}
    </Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Content;
