import React, { useState } from 'react';
import classes from './inputtext.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ListMessageContext } from '../../routes';
import OpenAI from 'openai';

function InputText() {

    const { addListMessage } = React.useContext(ListMessageContext);
    const [userInput, setUserInput] = useState("");

    const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true }); // Khởi tạo OpenAI instance

    // Hàm xử lý khi thay đổi giá trị của input
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    // Hàm xử lý khi nhấn nút send hoặc submit form
    const handleSendClick = async (event) => {
        event.preventDefault();
        const newMessage = [...(JSON.parse(localStorage.getItem('chat')) || []), { role: "user", content: userInput }];

        const chat = JSON.parse(localStorage.getItem('chat')) || [];
        addListMessage({ role: 'user', content: userInput });
        chat.push({ role: 'user', content: userInput });
        setUserInput('');

        const response = await openai.chat.completions.create({
            messages: newMessage,
            model: "gpt-3.5-turbo",
            max_tokens: 150,
            temperature: 0.7,
        });

        const newRespone = response.choices[0].message.content;

        addListMessage({ role: 'assistant', content: newRespone });
        chat.push({ role: 'assistant', content: newRespone })


        //lưu vào local
        localStorage.setItem('chat', JSON.stringify(chat));
    };

    return (
        <form onSubmit={handleSendClick} className={classes.inputContainer}>
            <input
                type="text"
                placeholder="Message Chatbot..."
                value={userInput}
                onChange={handleChange}
                className={classes.input}
            />
            <div onClick={handleSendClick} className={classes.sendButton}>
                <FontAwesomeIcon icon={faPaperPlane} size='xl' />
            </div>
        </form>
    );
}

export default InputText;
