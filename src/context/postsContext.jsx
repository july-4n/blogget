import React from 'react';
import PropTypes from 'prop-types';
import {usePostData} from '../hooks/usePostData';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const postsData = usePostData();

  return (
    <postsContext.Provider value={postsData}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
