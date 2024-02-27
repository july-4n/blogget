import {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import Text from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleAvatarClick = () => (
    setLogoutVisible(!isLogoutVisible)
  );

  const handleLogout = () => {
    delToken();
    setLogoutVisible(!isLogoutVisible);
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleAvatarClick}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
            <Text>{auth.name}</Text>
          </button>
          {
            isLogoutVisible && (
              <Text
                As='button'
                className={`${style.logout}`}
                onClick={handleLogout}
              >Выйти
              </Text>
            )}
        </>
        ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};

