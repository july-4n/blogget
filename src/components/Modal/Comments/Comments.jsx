import style from './Comments.module.css';
import Text from '../../../UI/Text';
import Date from '../../../components/Main/List/Post/Date';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? (
        comments.map(({id, author, body: text, created: date}) => (
          <li className={style.item} key={id}>
            <Text As='h3' className={style.author}
              size={18}
              tsize={22}>
              {author}
            </Text>
            <Text As='p' className={style.comment}
              size={14}
              tsize={18}>
              {text}
            </Text>
            <Date date={date}/>
          </li>
        ))
    ) : (<li>Нет комментариев</li>)}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
