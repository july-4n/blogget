import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const postsData = useContext(postsContext);

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.data.id} postData={postData.data} />
      ))}
    </ul>
  );
};
