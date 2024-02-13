import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditModal = ({ isOpen, onClose, sticker, onUpdateSticker }) => {
  const [editedText, setEditedText] = useState('');
  const [editedImpression, setEditedImpression] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [initialColorGenerated, setInitialColorGenerated] = useState('');

  useEffect(() => {
    setEditedText(sticker.memo || '');
    setEditedImpression(sticker.impression || '');

    // 초기 색상 설정
    setCurrentColor(sticker.color || 'white');
    setInitialColorGenerated(sticker.color || 'white'); // 초기 색상을 설정

  }, [isOpen, sticker]);

  const handleSave = () => {
    const updatedSticker = {
      ...sticker,
      memo: editedText,
      impression: editedImpression,
      color: currentColor,
    };
    onUpdateSticker(updatedSticker);
    onClose();
  };

  const handleImpressionChange = (event) => {
    const impression = event.target.value;
    setEditedImpression(impression);

    // 느낀 점이 처음 입력될 때만 색상 변경
    if (impression && initialColorGenerated === 'white') {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
      setInitialColorGenerated(randomColor); // 랜덤 색상으로 업데이트
    }
  };

  const colors = [
    "rgb(245, 195, 195)",
    "rgb(150, 209, 192)",
    "rgb(241, 196, 237)",
    "rgb(164, 209, 227)",
    "rgb(218, 238, 165)",
    "rgb(220, 181, 234)",
    "rgb(184, 234, 183)",
    "rgb(252, 175, 139)",
  ];

  return (
    <>
       {isOpen && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <p>Edit Sticker Text</p>
            <Textarea
              placeholder="Enter your memo here..."
              value={editedText}
              onChange={(event) => setEditedText(event.target.value)}
            />
            <Textarea
              placeholder="Enter your impression here..."
              value={editedImpression}
              onChange={handleImpressionChange}
            />
            <ButtonContainer>
              <CancelButton onClick={onClose}>Cancel</CancelButton>
              <SaveButton onClick={handleSave}>Save</SaveButton>
            </ButtonContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sticker: PropTypes.object.isRequired,
  onUpdateSticker: PropTypes.func.isRequired,
};

const ModalBackground = styled.div`
   background: rgba(178, 220, 244, 0.417);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 */
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  height: 70%;
  width: 40%;
  
  padding: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 1000;
  
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

const SaveButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

export default EditModal;
