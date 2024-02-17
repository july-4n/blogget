/* eslint-disable max-len */
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2024-02-16T00:45:00.000Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}></Post>
    </ul>

  );
};
