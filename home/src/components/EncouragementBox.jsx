import React, { useState } from 'react';
import styled from 'styled-components';

const EncouragementBox = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('choose your encouragement massage');

  const encouragementMessages = [
    "You're capable of turning dreams into reality.",
    "You're not alone – I'm here cheering you on!",
    "Don't forget to enjoy the journey.",
    "You've got the talent and spirit.",
    "Sending positive vibes your way.",
    "You're not alone in this journey.",
    "Your journey is unique:)",
    "Believe in your potential.",
    "You're stronger than you think.",
    "Keep going at your own pace. We're making progress.",
    "Believe in the soft strength within you",
    "Sending you warmth and encouragement",
    "Take each step with kindness towards yourself.",
    "You're not alone, and you're more capable than you realize."

  ];

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownChange = (event) => {
    const selectedMessage = event.target.value;
    setSelectedMessage(selectedMessage);
    setSelectedMessageToApi(selectedMessage);
    setShowDropdown(false);
  };

  return (
    <EncouragementContainer>
      <Button onClick={handleButtonClick}>Give an encouragement to yout mate!</Button>

      {showDropdown && (
        <Dropdown onChange={handleDropdownChange} value={selectedMessage}>
          <option disabled>choose your encouragement massage</option>
          {encouragementMessages.map((message, index) => (
            <option key={index} value={message}>
              {message}
            </option>
          ))}
        </Dropdown>
      )}

      <Message>{selectedMessage}</Message>
    </EncouragementContainer>
  );
};

const EncouragementContainer = styled.div`
  text-align: left;
//   margin: 20px;
`;

const Button = styled.button`
//   padding: 10px;
  background-color: rgb(201, 181, 219);
  color: black;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
`;

const Dropdown = styled.select`
//   padding: 5px;
  font-size: 16px; 
`;

const Message = styled.p`
  margin-top: 10px;
  font-weight: bold;
  font-size: 25px;
`;

export default EncouragementBox;

