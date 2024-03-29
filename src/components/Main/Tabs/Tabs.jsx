import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounceRaf';
import Text from '../../../UI/Text';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';

const LIST = [
  {
    value: 'Главная',
    Icon: HomeIcon,
  },
  {
    value: 'Топ',
    Icon: TopIcon,
  },
  {
    value: 'Лучшие',
    Icon: BestIcon,
  },
  {
    value: 'Горячие',
    Icon: HotIcon,
  }
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Выберите раздел');

  const handleSelectedMenuItem = (value) => {
    setSelectedMenuItem(value);
  };

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() =>
            setIsDropdownOpen(!isDropdownOpen)}>{selectedMenuItem}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <Text
              As='li'
              className={style.item}
              key={id}>
              <Text
                As='button'
                className={style.btn}
                onClick={() => {
                  handleSelectedMenuItem(value);
                }}>
                {value}
                {Icon && <Icon width={25} height={25}/>}
              </Text>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
