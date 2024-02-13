
import { useState } from "react";
import styled, { css } from "styled-components";
//Api연결 보내기
const Givemessage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('choose your encouragement message');
  
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
    setShowDropdown(false);
  };

  return (
    <EncouragementContainer>
      <Button onClick={handleButtonClick}>{selectedMessage}</Button>
      {showDropdown && (
        <Menu isdropped={showDropdown ? "true" : undefined}>
          <Ul>
            {encouragementMessages.map((message, index) => (
              <Li key={index}>
                <LinkWrapper onClick={() => handleDropdownChange({ target: { value: message } })}>
                  {message}
                </LinkWrapper>
              </Li>
            ))}
          </Ul>
        </Menu>
      )}
    </EncouragementContainer>
  );
};

const EncouragementContainer = styled.div`
  position: relative;
  text-align: left;
`;

const Button = styled.button`
  background-color:  rgb(245, 245, 245);
  color: black;
  font-size: 1.2vw;
  font-weight: bold;
  padding:1vw;
  border:0px
`;

const Menu = styled.div.attrs(props => ({
  isdropped: props.isdropped ? "true" : undefined,
}))`
  background: #e9e4e0;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 30vw;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #c6d7ec;
  }

  ${(props) =>
    props.isdropped
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
          left: 50%;
      `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -20px);
          left: 50%;
      `};
`;

Menu.shouldForwardProp = (prop) => prop !== "isdropped";

const Ul = styled.ul`
  & > li {
    margin-bottom: 2vh;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 0.8vw;
  text-decoration: none;
  color: #8a7474;
`;

export default Givemessage;
