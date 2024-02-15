import  {useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import Modal from './CreateModal';
import PropTypes from 'prop-types';
import EditModal from './EditModal';
// import axios from 'axios';
// import { getCookie } from '../cookie';

// 화살표함수 방식 : const(let) 변수명 = (매개변수) => {return{ }; };
const StickerBoard = ({ backBoxWidth, backBoxHeight }) => {
  const goalText = "GOAL : ";
  const firstName = "BE A GOOD FATHER ";
  const lastName = "BE A GOOD MOTHER ";
  StickerBoard.propTypes = {
    backBoxWidth: PropTypes.string.isRequired, // 예상되는 프로퍼티 유형과 필수 여부를 설정
    backBoxHeight: PropTypes.string.isRequired,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stickers, setStickers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [selectedSticker, setSelectedSticker] = useState(null); // 선택된 스티커 상태 추가
 
  //이번주 스티커 미리보기 조회 api
  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 데이터 가져오기
  //   axios.get("http://34.70.229.21:8080/api/sticker/board") // 예시 URL, 실제 URL로 변경해야 함
  //   .then(response => {
  //     // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
  //     const convertedStickers = response.data.map(stickerDto => ({
  //       id: stickerDto.id,
  //       text: stickerDto.title,
  //       color: stickerDto.stickerColor,
  //       shape: stickerDto.stickerShape,
  //       top: `${stickerDto.stickerTop}%`, // 백엔드에서 Long으로 받았지만 문자열 형태로 변경
  //       left: `${stickerDto.stickerLeft}%`, // 백엔드에서 Long으로 받았지만 문자열 형태로 변경
  //     }));
  //     // 스티커 상태 설정
  //     setStickers(convertedStickers);
  //   })
  //     .catch(error => {
  //       console.error('Error fetching stickers:', error);
  //     });
  // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행
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
      // color: selectedColor,
    };
  };

  const handleTextSubmit = (text) => {
    const stickerHeightSize = 23; // 스티커의 높이를 vw, vh 단위로 설정
    const stickerWidthSize = 15; // 스티커의 너비를 vw, vh 단위로 설정
    // const { shape, color } = getRandomStickerStyle(); // 랜덤한 모양과 색상 선택
    const { shape } = getRandomStickerStyle();
    // 전체 스티커 수가 12개 이상인지 확인
    if (stickers.length >= 12) {
      alert("스티커는 최대 12개까지만 생성할 수 있습니다.");
      closeModal();
      return;
    }

    let newSticker;
    let isOverlap;
// Title, stickerColor, stickerShape, stickerTop, stickerLeft
// 
    do {
      // 스티커 객체 생성
      newSticker = {
        id: Date.now(),
        text: text,
        top: `${Math.random() * (100 - stickerHeightSize)}%`,
        left: `${Math.random() * (95 - stickerWidthSize)}%`,
        shape: shape,
        color :"white", // 느낀 점이 있으면 랜덤한 색상, 아니면 흰색으로 설정
      //   memo: memo, // 메모 추가
      // impression: impression, // 느낀 점 추가
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
    const topWithoutPercentage = parseInt(newSticker.top.replace('%', ''));
    const leftWithoutPercentage = parseInt(newSticker.left.replace('%', ''));
    const postVer = {
      Title : newSticker.text,
       stickerColor : newSticker.color,
        stickerShape : newSticker.shape,
        stickerTop : topWithoutPercentage,
        stickerLeft : leftWithoutPercentage
    }
    console.log(postVer)
    // axios.post("http://34.70.229.21:8080/api/sticker/create",
    //   {
    //     Title : newSticker.text,
    //    stickerColor : newSticker.color,
    //     stickerShape : newSticker.shape,
    //     stickerTop : topWithoutPercentage,
    //     stickerLeft : leftWithoutPercentage
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization:getCookie('is_login'),
    //     },
    //   })
    //   .then((result) => {
    //     console.log("res : "+result);
    //     console.log("스티커등록");
        
    //     getCookie("is_login"); 
      
        
    
    //   })
    //   .catch((error) => {
    //     window.alert('등록 실패');
    //     console.log(error);
    //   })      
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
    {/* <h2>our sticker board of this week</h2> */}
        <Info style={{ width: backBoxWidth, height: "10vh" }}>
          <span>
            USER1<goal> {`${goalText} ${firstName}`} </goal>
          </span>
          <span>
            USER2<goal> {`${goalText} ${lastName}`} </goal>
          </span>
        </Info>
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
  top: ${(props) => props.top };
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

const Info = styled.div`

  /* 상대단위 위주로 수정,불필요한 포지션속성 제거,불필요한 가운데정렬 제거 */
    background-color: rgb(242, 237, 224);/* section 영역의 배경색을 흰색으로 설정 */
    position: relative;
    
    /* width: 95vw; /* section 영역이 부모 요소에 가득 차도록 설정 */
    /* height:10vh; */ 
    /* margin: 0;
    padding: 0;  */
    display: flex;
    justify-content: center; /* 중앙 정렬 설정 */
    /* box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);  */
   
    align-items: center; /* 중앙 정렬을 위해 추가 */
    /* position: absolute; 아래에서 높이가 100vh로 설정되었으므로 상대적인 위치 조절을 위해 absolute 사용 */
     /* top : 6%;
     left: 50%; */
     
     /* transform: translate(-50%, -50%); 가운데 정렬 및 상단 정렬 조정 */

 
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
  
    /* margin-right: 20%; /* 간격 조절 */
    /* margin-left: 20%; 간격 조절 */ 
    margin-right: 15%;
    margin-left: 15%;
    /* margin-top : 1%; */
    /* margin-bottom: 25px; */
    font-weight: bold;
    text-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  }
  
`;

export default StickerBoard;