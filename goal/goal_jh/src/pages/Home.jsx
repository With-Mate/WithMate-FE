import  { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal'; // 모달 컴포넌트 불러오기

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stickers, setStickers] = useState([]);
 
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
  const goalText = "GOAL : ";
  const firstName = "BE A GOOD FATHER ";
  const lastName = "BE A GOOD MOTHER ";
   
   // 유틸리티 함수: 랜덤한 모양과 색상 반환
   const getRandomStickerStyle = () => {
    const shapes = ['circle', 'rectangle1', 'ellipse', 'rectangle2', 'pentagon','parallelogram'];
    const colors = ['rgba(245, 195, 195, 0.947)', 'rgba(150, 209, 192, 0.9)', 'rgba(241, 196, 237, 0.9)','rgba(164, 209, 227, 0.9)','rgba(218, 238, 165, 0.947)','rgba(220, 181, 234, 0.867)','rgba(161, 200, 174, 0.915)','rgba(174, 188, 216, 0.935)','rgba(255, 182, 108, 0.77)'];

    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      shape: randomShape,
      color: randomColor,
    };
  };

  const handleTextSubmit = (text) => {
    const stickerSize = 200; // 스티커의 크기
    const { shape, color } = getRandomStickerStyle(); // 랜덤한 모양과 색상 선택

    // / 전체 스티커 수가 12개 이상인지 확인
   if (stickers.length >= 12) {
     alert('스티커는 최대 12개까지만 생성할 수 있습니다.');
     closeModal();
     return;
   }

    let newSticker;
    let isOverlap;

    do {
      newSticker = {
        id: Date.now(),
        text: text,
        top: `${Math.random() * (700 - stickerSize)}px`,
        left: `${Math.random() * (1500 - stickerSize)}px`,
        shape: shape,
        color: color,
      };

      isOverlap = stickers.some((sticker) => {
        const stickerRect = {
          top: parseFloat(sticker.top),
          left: parseFloat(sticker.left),
          bottom: parseFloat(sticker.top) + stickerSize,
          right: parseFloat(sticker.left) + stickerSize,
        };

        const newStickerRect = {
          top: parseFloat(newSticker.top),
          left: parseFloat(newSticker.left),
          bottom: parseFloat(newSticker.top) + stickerSize,
          right: parseFloat(newSticker.left) + stickerSize,
        };

        return (
          newStickerRect.right > stickerRect.left &&
          newStickerRect.left < stickerRect.right &&
          newStickerRect.bottom > stickerRect.top &&
          newStickerRect.top < stickerRect.bottom
        );
      });
    } while (isOverlap);

    setStickers((prevStickers) => [...prevStickers, newSticker]);
    closeModal();
  };

  return(
    <CenteredContainer>
    
      <Info>  
        <span>USER1<goal> {`${goalText} ${firstName}`} </goal></span>
        <span>USER2<goal> {`${goalText} ${lastName}`} </goal></span></Info>
       <BackBox >
     <h2>our sticker board of this week</h2>
     <img src="mate.png" alt="mate image" />
     <button onClick={openModal}>Make a sticker!</button>
    
     
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
       >
         {sticker.text}
       </Sticker>
     ))} 
   </BackBox>

   <Footer>
     <hr />
     라이센스 : 
   </Footer>
   </CenteredContainer>
);
};
  
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 100vh; /* 뷰포트의 높이에 맞춤 */
  
  /* Ensure the container takes up the full height of the viewport */
`;
const Info = styled.div`

    background-color: rgb(242, 237, 224);/* section 영역의 배경색을 흰색으로 설정 */
    width: 1600px; /* section 영역이 부모 요소에 가득 차도록 설정 */
    height:60px;
    margin: 0;
    padding: 0; 
    display: flex;
    justify-content: center; /* 중앙 정렬 설정 */
    /* box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);  */
  
    align-items: center; /* 중앙 정렬을 위해 추가 */
    position: absolute; /* 아래에서 높이가 100vh로 설정되었으므로 상대적인 위치 조절을 위해 absolute 사용 */
     top : 6%;
     left: 50%;
     margin-bottom: 0;
     transform: translate(-50%, -50%); /* 가운데 정렬 및 상단 정렬 조정 */
    
  goal {
    /* goal 컴포넌트에 대한 스타일 */
    background: rgba(253, 253, 253, 0.859);
    font-weight: bold;
    width:500px;
    height:110px;
    white-space: nowrap;
    color: #69af95;
    margin-left: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 그림자 효과 강조 */
    
    border: 2px solid darkgrey; /* 테두리 스타일 설정 */
    padding: 4px; /* 테두리와 요소 내용 사이의 간격 설정 */
    /* 기타 원하는 스타일 속성 추가 */
  }
  
  span {
    font-size: 20px;
    margin-right: 20%; /* 간격 조절 */
    margin-left: 20%; /* 간격 조절 */
    margin-top : 1%;
    margin-bottom: 25px;
    font-weight: bold;
    text-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  }
  
`;


const BackBox = styled.div`
 
  width: 1600px;
  height: 750px;
  background-color: rgb(228, 215, 183);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0; 
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  img {
    width: 34%;
    height: 34%;
    object-fit: cover;
    position: absolute;
    bottom: 10%;
    left:0;
    z-index: -2;
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
}
h2{
  width:360px;
  height:60px;
  background-color: rgb(196, 194, 245);
  color:rgb(105, 64, 36);
  position: absolute;
    top: -50px;
    left: 50%; /* 가운데 정렬 */
  transform: translateX(-50%); /* 중앙으로 위치 조정 */
    display: flex;
  align-items: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  justify-content: center;
}



`;

const Footer = styled.footer`
  position: absolute;
  bottom: -20px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  hr {
    border: 1px solid lightgrey;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Sticker = styled.div`
  /* 스티커에 대한 스타일을 정의할 수 있습니다. */
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: rgba(72, 53, 49, 0.951);
  /* font-style: italic; 글자 기울이기 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); //그림자 지정
  /* rgb(79,70,70) */
  z-index: -1;
  clip-path: ${(props) =>
    props.shape === 'circle'
      ? 'circle(50% at 50% 50%)'
      : props.shape === 'rectangle1'
      ? 'inset(10% 0 10% 0)' 
      : props.shape === 'ellipse'
      ? 'ellipse(50% 50% at 50% 50%)'
      : props.shape === 'rectangle2'
      ? 'inset(3% 0 3% 0)'
      : props.shape === 'pentagon'
      ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
      : props.shape === 'parallelogram'
      ? 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
      : 'none'};
`;

export default Home;  