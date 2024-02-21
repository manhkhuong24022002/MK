import React, { useEffect, useState, useRef } from 'react';
import classes from './content.module.scss';
import avatar from '../../assets/imgs/avatar.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ListMessageContext } from '../../routes';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';


function Content() {
  const [chatData, setChatData] = useState(JSON.parse(localStorage.getItem('chat')) || []);
  const ref = useRef(null);
  const { listMessage } = React.useContext(ListMessageContext);

  useEffect(() => {
    console.log(listMessage)
    setChatData(listMessage || [])
    ref?.current.scrollIntoView({ behavior: 'smooth' });
  }, [listMessage, chatData])



  return (
    <div >
      {chatData.map((item, index) => (
        <div key={index} className={classes.container}>
          <div className={classes.container__avatar}>
            {item.role === 'user' ? (
              <FontAwesomeIcon icon={faCircleUser} color='white' size='xl' />
            ) : (
              <FontAwesomeIcon icon={faThemeisle} color='white' size='xl' />
            )}
          </div>
          <div className={classes.container__content}>
            {item.role === 'user' ? (
              <h5>You</h5>
            ) : (
              <h5>ChatBot</h5>
            )}
            <p>{item.content}</p>
          </div>
        </div>
      ))}
      <div ref={ref}></div>
    </div>
  );
}

export default Content;
