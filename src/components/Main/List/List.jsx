import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2024-02-16T00:45:00.000Z',
      id: '79',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 24,
      date: '2024-02-19T03:20:00.000Z',
      id: '564',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 58,
      date: '2024-01-12T09:45:00.000Z',
      id: '10',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2024-01-28T12:45:00.000Z',
      id: '15',
    },
  ];

  return (
    <ul className={style.list}>
      {postData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
      {
        [
          <Post key={0} postData={postData[0]} />,
          <Post key={1} postData={postData[1]} />,
          <Post key={2} postData={postData[2]} />,
          <Post key={3} postData={postData[3]} />,
        ]
      }
    </ul>
  );
};
