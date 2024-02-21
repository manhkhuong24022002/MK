import React from 'react';
import classes from './chatbox.module.scss';
import icon from '../../assets/imgs/trongsuot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
// import { Container } from './styles';

function Chatbox() {
  return (
    <div className={classes.container}>
      <p className={classes.container__content}>Noi dung da chat</p>
      <div className={classes.container__icon}>
        <FontAwesomeIcon icon={faEllipsis} color='white' size='xs' />
      </div>
    </div>
  );
}

export default Chatbox;