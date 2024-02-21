import React from 'react';
import classes from './content.module.scss';
import avatar from '../../assets/imgs/avatar.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function content() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const apiKey = 'YOUR_API_KEY'; // Thay YOUR_API_KEY bằng API key của bạn

  const callOpenAI = () => {
    const url = 'https://api.openai.com/v1/engines/davinci/completions';
    const data = {
      prompt: inputText,
      max_tokens: 50
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve response');
        }
        return response.json();
      })
      .then(data => {
        setOutputText(data.choices[0].text);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__avatar}>
        <FontAwesomeIcon icon={faCircleUser} color='white' size='xl' />
      </div>
      <div className={classes.container__content}>
        <h5>YOU</h5>
        <p>Hoi ca d asd as das dasd asd as dssssssssss alo  dasdaaaaaaaaaaaa bietgif khogn </p>
      </div>
    </div>
  );
}

export default content;