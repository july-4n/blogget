import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {URL_API} from '../../../api/const';
import {urlAuth} from '../../../api/auth';
import Text from '../../../UI/Text';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const handleAvatarClick = () => (
    setLogoutVisible(!isLogoutVisible)
  );

  const handleLogout = () => {
    delToken();
    setLogoutVisible(!isLogoutVisible);
    setAuth({});
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => {
        if (!response.ok) {
          localStorage.removeItem('bearer');
          throw new Error(response.statusText);
        }
        return response.json();
      })

      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]);
  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleAvatarClick}>
          <img className={style.img}
            src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
        </button>
        ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <AuthIcon className={style.svg}/>
      </Text>
    )}
      {
        isLogoutVisible && (
          <Text
            As='button'
            className={`${style.logout}`}
            onClick={handleLogout}
          >Выйти
          </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

