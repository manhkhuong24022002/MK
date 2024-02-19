import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss'
import { useState } from 'react';
import Newchat from '../../components/newchat';

// import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [response, setResponse] = useState(null);

  const fetchDataFromOpenAI = async () => {
    try {
      const apiKey = 'YOUR_OPENAI_API_KEY';
      const data = {
        prompt: 'This is a test prompt.',
        max_tokens: 50
      };
      const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.post('https://api.openai.com/v1/completions', data, { headers });
      setResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className=''>
      <Newchat/>
    </div>
  );
}

export default Home;
