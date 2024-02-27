import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const postsData = useContext(postsContext);
  console.log(postsData);
  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.data.id} postData={postData.data} />
      ))}
      {/* {
        [
          <Post key={0} postData={postsData[0].data}/>,
          <Post key={1} postData={postsData[1].data}/>,
          <Post key={2} postData={postsData[2].data}/>,
          <Post key={3} postData={postsData[3].data}/>,
        ]
      } */}
    </ul>
  );
};
