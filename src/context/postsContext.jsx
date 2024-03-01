import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {URL_API} from '../api/const';
import {useToken} from '../hooks/useToken';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
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
        const postsData = data.children;
        console.log(postsData);
        setPostData(postsData);
      })
      .catch(err => {
        console.error(err);
        delToken();
      });
  }, [token]);

  return (
    <postsContext.Provider value={postsData}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
