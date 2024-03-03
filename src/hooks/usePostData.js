import {URL_API} from '../api/const';
import {useToken} from '../hooks/useToken';
import {useEffect, useState} from 'react';

export const usePostData = () => {
  const [token, delToken] = useToken();
  const [postsData, setPostData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=14`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({data}) => {
        console.log((data));
        const postsData = data.children;
        console.log(postsData);
        setPostData(postsData);
      })
      .catch(err => {
        console.error(err);
        delToken();
      });
  }, [token]);

  return postsData;
};