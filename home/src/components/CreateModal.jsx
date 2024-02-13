import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';


const Modal = ({ onClose, onTextSubmit, ...props }) => {
  const [inputText, setInputText] = useState('');


  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTextSubmit = () => {
    onTextSubmit(inputText);
    setInputText('');
    onClose();
  };

  return (
    <ModalOverlay {...props}>
      <ModalContent>
        <span onClick={onClose}>&times;</span>
        <p>contents of the sticker</p>
        <input type="text" value={inputText} onChange={handleTextChange} placeholder='Write your detailed challenges to achieve your goals' />
        <button onClick={handleTextSubmit}>Let&apos;s put our stickers on!</button>
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onTextSubmit: PropTypes.func.isRequired,
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onTextSubmit: PropTypes.func.isRequired,
};


// 프로필 화면에서 모달이 엉뚱한 곳에 뜨는 문제 (첫 슬라이드에서 모달 열었는데 세번째 슬라이드에,,,)
// fixed,top,left,transform모두 삭제 후 height 100으로 
const ModalOverlay = styled.div`
   /* background-color: aliceblue; */
  /* position: fixed; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 중앙 정렬을 위한 이동 */
  /* filter: blur(10px); /* 흐림 효과 적용 */
  /* opacity: 0.8; 투명도 조절 */ 
  /* width: 10%;
  height: 90%; */
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 */
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: white;
  
  padding: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 1000;
  width: 330px;
 


  span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  
  input{
    width: 100%;
    height: 25px;
  }

  button {
    position: absolute;
    top: 130px; /* 수정된 부분: 아래로 이동 */
    width: 200px;
    left : 50%;
    transform: translateX(-50%); 
    font-weight: bold;
    
  }
`;


export default Modal;