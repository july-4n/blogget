import style from './Post.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview/Preview';
import Rating from './Rating/Rating';
import Date from './Date/Date';
import Content from './Content/Content';
import {ReactComponent as DeleteIcon} from './img/delete.svg';


export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created: date,
    id
  } = postData;
  return (
    <li className={style.post}>
      <Preview thumbnail={thumbnail} title={title}/>
      <Content title={title} id={id} author={author} markdown={markdown}/>
      <Rating ups={ups}/>
      <button className={style.delete}>
        <DeleteIcon/>
      </button>
      <Date date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
