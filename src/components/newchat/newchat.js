import React from 'react';
import classes from './newchat.module.scss';
import icon from '../../assets/imgs/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

function Newchat() {
  return (
    <div className={classes.container}>
      <div className={classes.container__wrap}>
        <div className={classes.container__wrap__icon}>
          <img src={icon} alt="" />
        </div>
        <p className={classes.container__wrap__content}>New chat</p>
      </div>

      <div className={classes.container__edit}>
        <FontAwesomeIcon icon={faPenToSquare} color='white' />
      </div>
    </div>
  );
}

export default Newchat;