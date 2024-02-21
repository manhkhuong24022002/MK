// Chat.js

import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        // Make a request to the ChatGPT API
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci-codex/completions',
                {
                    prompt: input,
                    max_tokens: 150,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`,
                    },
                    message:
                        [
                            {
                                "role": "system",
                                "content": "You are a helpful assistant."
                            },
                            {
                                "role": "user",
                                "content": "Hello!"
                            }
                        ]

                }
            );

            // Update the state with the response
            setMessages([...messages, { text: input, type: 'user' }]);
            setMessages([...messages, { text: response.data.choices[0].text, type: 'ai' }]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.type}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;