import {useContext, useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const {token} = useContext(tokenContext);
  const [[post, comments], setCommentsData] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          console.log(comments);

          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return [post, comments];
};
