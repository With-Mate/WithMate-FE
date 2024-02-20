import { useEffect,useState } from 'react';
import styled from 'styled-components';
// import { useRef } from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';
import { getCookie } from '../cookie';

// 화살표함수 방식 : const(let) 변수명 = (매개변수) => {return{ }; };
const ProfileBoard = ({ backBoxWidth, backBoxHeight,weekNum }) => {

  ProfileBoard.propTypes = {
    backBoxWidth: PropTypes.string.isRequired, // 예상되는 프로퍼티 유형과 필수 여부를 설정
    backBoxHeight: PropTypes.string.isRequired,
    weekNum : PropTypes.number.isRequired,
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [stickers, setStickers] = useState([]);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // const [selectedSticker, setSelectedSticker] = useState(null); // 선택된 스티커 상태 추가
  const [myName,setMyname] = useState('');
  const [mateName,setMatename] = useState('');
  const [myGoal,setMygoal] = useState('');
  const [mateGoal,setMategoal] = useState('');
  const [thisWeekStickers,setThisweekstickers] = useState([]);
 
  
// 특정 주의 스티커 보드 추출 함수
function extractStickerBoardByWeek(jsonResponse, weekNum) {
  // 주어진 weekNum에 해당하는 객체를 찾음
  const weekBoard = jsonResponse.weekBoards.find(board => board.weekNum === weekNum);
  // 해당하는 객체가 없을 경우 빈 배열 반환
  if (!weekBoard) return [];
  // 해당하는 주의 스티커 보드 반환
  return weekBoard.stickerBoard;
}

//  이번주 스티커 미리보기 조회 api
  useEffect(() => {
    //컴포넌트가 마운트될 때 데이터 가져오기
    console.log("weeknum:"+weekNum);
    axios.get("http://34.70.229.21:8080/api/self/journey", 
    {headers: {
            
             Authorization:getCookie('is_login'),
           },})  // 예시 URL, 실제 URL로 변경해야 함
    .then(response => {
      // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
      // 특정 weekNum에 해당하는 항목 필터링
      console.log("필터합수실행");
      // console.log(response.data.weekBoards.filter(board=>board.weekNum===1));
      // console.log(filterByWeekNum(response.data, 1));
      // setThisweekstickers(filterByWeekNum(response.data, 1));
      // console.log("필터링객체:"+thisWeekStickers);
      console.log(extractStickerBoardByWeek(response.data,weekNum));
      // const newarr=[];
      const newArray=extractStickerBoardByWeek(response.data,1);
      console.log("배열:"+newArray);
      console.log(newArray.length);
      setThisweekstickers(newArray);
      console.log("set된 디스위크:"+thisWeekStickers);
      const convertedStickers =extractStickerBoardByWeek(response.data,weekNum).map(stickerDto => ({
        id: stickerDto.id,
        text: stickerDto.title,
        color: stickerDto.stickerColor,
        shape: stickerDto.stickerShape,
        top: `${stickerDto.stickerTop}%`, // 백엔드에서 Long으로 받았지만 문자열 형태로 변경
        left: `${stickerDto.stickerLeft}%`, // 백엔드에서 Long으로 받았지만 문자열 형태로 변경

      }));
      console.log("map:"+convertedStickers)
      // const convertedStickers = response.data.stickerBoard;
      // console.log(convertedStickers)
      // 스티커 상태 설정
      // console.log(response.data.myStickerCount);
    //  setMyStickerCount(response.data.myStickerCount);
    //  console.log(thisWeekStickers)
    //     console.log("count:"+myStickerCount);
       setStickers(convertedStickers);
       console.log(stickers);
      console.log("get 완료");
    })
      .catch(error => {
        console.error('Error fetching stickers:', error);
      });

      //이름,목표 조회
      axios.get("http://34.70.229.21:8080/api/sticker/relation", 
      {headers: {
              
               Authorization:getCookie('is_login'),
             },})  // 예시 URL, 실제 URL로 변경해야 함
      .then(response => {
        // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
        console.log(response.data);
        setMyname(response.data.myName);
        setMygoal(response.data.myGoal);
        setMatename(response.data.mateName);
        setMategoal(response.data.mateGoal);
        
        console.log("목표 get 완료");
      })
       .catch(error => {
          console.error('Error fetching stickers:', error);
        });
  
  }, []); 


 


  return (
    <>
    {/* <h2>our sticker board of this week</h2> */}
        <Info style={{ width: backBoxWidth, height: "10vh" }}>
          <span>
            Goal of {myName} : {myGoal} 
          </span>
          
          <span>
            Goal of {mateName} : {mateGoal}
          </span>
        </Info>
      <BackBox style={{ width: backBoxWidth, height: backBoxHeight }}>
        <img src="mateRound.png" alt="mate image" />
        {/* <button onClick={handleButtonClick}>Make a sticker!</button> */}
{/* 
        모달
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onTextSubmit={handleTextSubmit}
          />
        )} */}

    {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          shape={sticker.shape}
          color={sticker.color}
          top={sticker.top}
          left={sticker.left}
          // onClick={() => handleStickerClick(sticker)}
        >
          {sticker.text}
        </Sticker>
      ))}

      
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
    width: 25vw;
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
  font-size: 0.9rem;
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

 
  /* goal {
    /* goal 컴포넌트에 대한 스타일 */
    /* background: rgba(253, 253, 253, 0.859);
    font-weight: bold;
    width:500px;
    height:110px;
    white-space: nowrap;
    color: #69af95;
    margin-left: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 그림자 효과 강조 */
    
    /* border: 2px solid darkgrey; 테두리 스타일 설정 */
    /* padding: 4px; 테두리와 요소 내용 사이의 간격 설정 */ 
    /* 기타 원하는 스타일 속성 추가 */
  /* } */ 

  span {
    font-size: 1.5rem;
  
    /* margin-right: 20%; /* 간격 조절 */
    /* margin-left: 20%; 간격 조절 */ 
    margin-right: 11%;
    margin-left: 11%;
    /* margin-top : 1%; */
    /* margin-bottom: 25px; */
    font-weight: bold;
    /* white-space: nowrap; */
    border: 2px solid darkgrey; 
    background: rgba(253, 253, 253, 0.859);
    color: #69af95;
    text-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  }
  
`;
// const Goal = styled.span`
//   background: rgba(253, 253, 253, 0.859);
//     font-weight: bold;
//     /* width:50%;
//     height:50%; */
//     white-space: nowrap;
//     color: #69af95;
//     /* margin-left: 10px; */
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 그림자 효과 강조 */
//     /* margin-right: 5%; */
//     border: 2px solid darkgrey; /* 테두리 스타일 설정 */
//     padding: 4px; /* 테두리와 요소 내용 사이의 간격 설정 */
//     /* 기타 원하는 스타일 속성 추가 */
// `
export default ProfileBoard;