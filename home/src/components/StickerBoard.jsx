import  { useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import Modal from './CreateModal';
import PropTypes from 'prop-types';
import EditModal from './EditModal';

// 화살표함수 방식 : const(let) 변수명 = (매개변수) => {return{ }; };
const StickerBoard = ({ backBoxWidth, backBoxHeight }) => {
  StickerBoard.propTypes = {
    backBoxWidth: PropTypes.string.isRequired, // 예상되는 프로퍼티 유형과 필수 여부를 설정
    backBoxHeight: PropTypes.string.isRequired,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stickers, setStickers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [selectedSticker, setSelectedSticker] = useState(null); // 선택된 스티커 상태 추가

  // 스티커 클릭 시 선택된 스티커 상태 업데이트
  const handleStickerClick = (sticker) => {
    setSelectedSticker(sticker);
    openEditModal(); // EditModal 열기
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //  // 사용자가 이미 6개의 스티커를 가지고 있는지 확인
  //  const userStickers = stickers.filter((sticker) => sticker.text === text);
  //  if (userStickers.length >= 6) {
  //    alert('한 사용자당 최대 6개의 스티커까지만 생성할 수 있습니다.');
  //    closeModal();
  //    return;
  //  }

  const previousColorRef = useRef("rgba(245, 195, 195, 0.947)");

  const getRandomStickerStyle = () => {
    // 원, 정사각형, 타원, 직사각형(가로가 긴),정오각형, 평행사변형
    const shapes = [
      "circle",
      "rectangle1",
      "ellipse",
      "rectangle2",
      "pentagon",
      "parallelogram",
    ];
    const colors = [
      "rgb(255, 255, 255)",
      "rgb(253, 251, 251)",
    ];

    // const colors = ['rgba(223, 41, 41, 0.947)', 'rgba(255, 149, 43, 0.9)', 'rgba(255, 236, 67, 0.954)', 'rgba(35, 195, 56, 0.9)', 'rgba(60, 74, 227, 0.947)', 'rgba(165, 50, 242, 0.867)',  'rgba(255, 73, 194, 0.77)'

    // ];

    console.log("pre : ", previousColorRef.current);

    let selectedColor = colors[Math.floor(Math.random() * colors.length)];
    while (selectedColor === previousColorRef.current) {
      selectedColor = colors[Math.floor(Math.random() * colors.length)];
    }

    previousColorRef.current = selectedColor;
    console.log("newpre : ", previousColorRef.current);

    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    console.log("color : ", selectedColor);
    return {
      shape: randomShape,
      color: selectedColor,
    };
  };

  const handleTextSubmit = (text,memo,impression) => {
    const stickerHeightSize = 23; // 스티커의 높이를 vw, vh 단위로 설정
    const stickerWidthSize = 15; // 스티커의 너비를 vw, vh 단위로 설정
    const { shape, color } = getRandomStickerStyle(); // 랜덤한 모양과 색상 선택

    // 전체 스티커 수가 12개 이상인지 확인
    if (stickers.length >= 12) {
      alert("스티커는 최대 12개까지만 생성할 수 있습니다.");
      closeModal();
      return;
    }

    let newSticker;
    let isOverlap;

    do {
      // 스티커 객체 생성
      newSticker = {
        id: Date.now(),
        text: text,
        top: `${Math.random() * (100 - stickerHeightSize)}%`,
        left: `${Math.random() * (95 - stickerWidthSize)}%`,
        shape: shape,
        color : impression ? color : "white", // 느낀 점이 있으면 랜덤한 색상, 아니면 흰색으로 설정
        memo: memo, // 메모 추가
      impression: impression, // 느낀 점 추가
      };

      // 스티커가 BackBox 영역을 벗어나지 않도록 확인
      if (
        parseFloat(newSticker.top) < 0 ||
        parseFloat(newSticker.left) < 0 ||
        parseFloat(newSticker.top) + stickerHeightSize > 90 ||
        parseFloat(newSticker.left) + stickerWidthSize > 95
      ) {
        isOverlap = true; // 벗어나면 다시 생성
      } else {
        isOverlap = stickers.some((sticker) => {
          const stickerRect = {
            top: parseFloat(sticker.top),
            left: parseFloat(sticker.left),
            bottom: parseFloat(sticker.top) + stickerHeightSize,
            right: parseFloat(sticker.left) + stickerWidthSize,
          };

          const newStickerRect = {
            top: parseFloat(newSticker.top),
            left: parseFloat(newSticker.left),
            bottom: parseFloat(newSticker.top) + stickerHeightSize,
            right: parseFloat(newSticker.left) + stickerWidthSize,
          };

          return (
            newStickerRect.right > stickerRect.left &&
            newStickerRect.left < stickerRect.right &&
            newStickerRect.bottom > stickerRect.top &&
            newStickerRect.top < stickerRect.bottom
          );
        });
      }
    } while (isOverlap);
    console.log("Final Sticker Top:", newSticker.top);
    console.log("Final Sticker sh:", newSticker.shape);
    setStickers((prevStickers) => [...prevStickers, newSticker]);
    closeModal();
  };
  const handleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    openModal(); // 모달 열기
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
    
  };
  

  const closeEditModal = () => {

    setIsEditModalOpen(false);
  };

  const onUpdateSticker = (updatedSticker) => {
    // 업데이트 로직을 여기에 구현
    console.log('Updated sticker:', updatedSticker);
    setStickers((prevStickers) => {
      return prevStickers.map(sticker => {
      if (sticker.id === updatedSticker.id) {
         return updatedSticker;
       }
      return sticker;
      })
    })
  }; 

  


  return (
    <>
      <BackBox style={{ width: backBoxWidth, height: backBoxHeight }}>
        <img src="mateRound.png" alt="mate image" />
        <button onClick={handleButtonClick}>Make a sticker!</button>

        {/* 모달 */}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onTextSubmit={handleTextSubmit}
          />
        )}

    {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          shape={sticker.shape}
          color={sticker.color}
          top={sticker.top}
          left={sticker.left}
          onClick={() => handleStickerClick(sticker)}
        >
          {sticker.text}
        </Sticker>
      ))}

      {/* 스티커 클릭에 대한 편집 모달 */}
      {isEditModalOpen && (
        <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        sticker={selectedSticker} 
        onUpdateSticker={onUpdateSticker}
      />
      )}
      </BackBox>
    </>
  );
};
  


const BackBox = styled.div`
 
 /* 상대단위 위주로 수정, position줘서 스티커 위치를 backbox기준으로 계산하도록,불필요한 가운데정렬 코드 삭제 */
  /* margin-top: 50vh; */
  /* width: 95vw;
  height: 90vh; */
  background-color: rgb(228, 215, 183);
  position: relative;
  /* top: 50%;
  left: 50%;
  margin: 0;
  padding: 0; 
  transform: translate(-50%, -50%); */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  img {
    width: 30vw;
    height: 25vh;
    object-fit: cover;
    position: absolute;
    bottom: 10%;
    left:0;
    
  }
  button{
  width:170px;
  height:70px;
  padding: 0;
  background-color: rgb(220, 218, 214);
  font-weight: bold;
  position: absolute;
    bottom: 7%;
    right: 5%;
    z-index: 5;
}




`;


const Sticker = styled.div`
  /* 포지션 absolute-직계부모(백박스) 기준으로 위치계산함. */
  width: 15%;
  height: 23%;
  
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: rgba(72, 53, 49, 0.951);
  background-color: ${(props) => props.color};
  /* font-style: italic; 글자 기울이기 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); //그림자 지정
  /* rgb(79,70,70) */
  z-index: 2;
  clip-path: ${(props) =>
    props.shape === 'circle'
    ? 'ellipse(40% 50% at 50% 50%)' 
      : props.shape === 'rectangle1'
      ? 'inset(5% 5% 5% 5%)' // 정사각형
      : props.shape === 'ellipse'
      ? 'ellipse(45% 50% at 50% 50%)' // 타원
      
      : props.shape === 'rectangle2'
      ? 'inset(5% 5% 5% 5%)' // 직사각형(가로가 긴)
      : props.shape === 'pentagon'
      ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' // 정오각형
      :props.shape === 'parallelogram'
      
      ? 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' // 평행사변형
      : 'none'};
`;
export default StickerBoard;