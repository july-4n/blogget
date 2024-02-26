import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {URL_API} from '../api/const';
import {useToken} from '../hooks/useToken';
// import {Post} from '../components/Main/List/Post/Post';
// import List from '../components/Main/List';
export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [token, delToken] = useToken();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=20`, {
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
        console.log(data.children);
        const postData = data.children;
        setPostData(postData);
      })
      .catch(err => {
        console.error(err);
        delToken();
      });
  }, [token]);

  return (
    <postsContext.Provider value={postData}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
