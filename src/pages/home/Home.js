import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss'
import { useState } from 'react';
import Newchat from '../../components/newchat/newchat';
import Chatbox from '../../components/chatbox/chatbox';
import Content from '../../components/content/content';
import InputText from '../../components/inputtext/inputtext';
import Chat from '../../components/test/Chat';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  // const { listMessage } = React.useContext(ListMessageContext);

  return (
    <div className={classes.home}>
      <div className={classes.home__title}>
        <div className={classes.home__title__newchat}>
          {/* {listMessage.map((item, index) => {
            <Newchat key={index} />
          })
          } */}
          <Newchat />
        </div>
        <div className={classes.home__title__chatbox}>
          <div className={classes.wrap}>
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
          </div>
        </div>
      </div>
      <div className={classes.home__content}>
        <div className={classes.home__content__nav}>
          <h5>ChatBot</h5>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faThemeisle} color='white' size='xl' />
          </div>
        </div>
        <div className={classes.home__content__wrap}>
          <Content />
        </div>
        <div className={classes.home__content__input}>
          <InputText />
        </div>
      </div>
    </div>

    // // đừng xóa comment ở trên nha
    // <div>
    //   <h1>ChatGPT React App</h1>
    //   <Chat />
    // </div >
  );
}

export default Home;


// sk - UND1a8Yf5X45ADreFI7rT3BlbkFJsbBmsR1CRPR91u2sKOFs



