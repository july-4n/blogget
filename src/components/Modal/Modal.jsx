import style from './Modal.module.css';
import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';

export const Modal = ({closeModal, id}) => {
  const overlayRef = useRef(null);
  console.log(id);

  const [post, comments] = useCommentsData(id);
  // console.log(post);
  // console.log(comments);

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
        {status === 'loaded' && (
          <>
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
          </>
        )}
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
