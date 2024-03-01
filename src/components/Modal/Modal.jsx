import style from './Modal.module.css';
import React, {useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import {useCommentsData} from '../../hooks/useCommentsData';
import {postsContext} from '../../context/postsContext';
import FormComment from '../Modal/FormComment';
import Comments from '../Modal/Comments';

export const Modal = ({closeModal}) => {
  const overlayRef = useRef(null);
  const postsData = useContext(postsContext);
  const id = postsData.id;

  const [post, comments] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{post.title}</h2>
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {post.markdown}
          </Markdown>
        </div>
        <p className={style.author}>{post.author}</p>
        <FormComment/>
        <Comments comments={comments}/>
        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
