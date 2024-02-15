
import styled from 'styled-components';
import Nav from '../components/Nav';
import StickerBoard from '../components/StickerBoard';

const Home = () => {
  
  // const goalText = "GOAL : ";
  // const firstName = "BE A GOOD FATHER ";
  // const lastName = "BE A GOOD MOTHER ";

  
  return (
    <>
      <Nav />
      <CenteredContainer>
        {/* <h2>our sticker board of this week</h2>
        <Info>
          <span>
            USER1<goal> {`${goalText} ${firstName}`} </goal>
          </span>
          <span>
            USER2<goal> {`${goalText} ${lastName}`} </goal>
          </span>
        </Info> */}
        <h2>our sticker board of this week</h2>
        <StickerBoard backBoxWidth="95vw" backBoxHeight="90vh" />

        <Footer>
          <hr />
          license : Author upklyak Source Freepik
        </Footer>
      </CenteredContainer>
    </>
  );

}; 
  
const CenteredContainer = styled.div`
  /* margin-top: 5vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* justify-content: center; * //align하고의 차이?
  /* height: 100vh; 뷰포트의 높이에 맞춤 */
  /* background-color: black; */
  /* Ensure the container takes up the full height of the viewport */


  h2{
    /* 불필요한 포지션 속성 제거-> 가운데정렬을 top,left,translate로 하던거 제거-마진으로 해결(단위도 상대단위) */
  margin-left: 30vw;
  margin-right: 30vw;
  height:7vh;
  margin-bottom:-3.5vh ;
  background-color: rgb(196, 194, 245);
  color:rgb(105, 64, 36);
  /* position: absolute;
    top: -50px;
    left: 50%; /* 가운데 정렬 */
  /* transform: translateX(-50%); 중앙으로 위치 조정 */ 
    display: flex;
  align-items: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
  justify-content: center;
  z-index: 1;
 
}
    
`;
// const Info = styled.div`

//   /* 상대단위 위주로 수정,불필요한 포지션속성 제거,불필요한 가운데정렬 제거 */
//     background-color: rgb(242, 237, 224);/* section 영역의 배경색을 흰색으로 설정 */
//     width: 95vw; /* section 영역이 부모 요소에 가득 차도록 설정 */
//     height:10vh;
//     /* margin: 0;
//     padding: 0;  */
//     display: flex;
//     justify-content: center; /* 중앙 정렬 설정 */
//     /* box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);  */
   
//     align-items: center; /* 중앙 정렬을 위해 추가 */
//     /* position: absolute; 아래에서 높이가 100vh로 설정되었으므로 상대적인 위치 조절을 위해 absolute 사용 */
//      /* top : 6%;
//      left: 50%; */
     
//      /* transform: translate(-50%, -50%); 가운데 정렬 및 상단 정렬 조정 */

 
//   goal {
//     /* goal 컴포넌트에 대한 스타일 */
//     background: rgba(253, 253, 253, 0.859);
//     font-weight: bold;
//     width:500px;
//     height:110px;
//     white-space: nowrap;
//     color: #69af95;
//     margin-left: 10px;
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 그림자 효과 강조 */
    
//     border: 2px solid darkgrey; /* 테두리 스타일 설정 */
//     padding: 4px; /* 테두리와 요소 내용 사이의 간격 설정 */
//     /* 기타 원하는 스타일 속성 추가 */
//   }
  
//   span {
//     font-size: 20px;
//     margin-right: 20%; /* 간격 조절 */
//     margin-left: 20%; /* 간격 조절 */
//     margin-top : 1%;
//     margin-bottom: 25px;
//     font-weight: bold;
//     text-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
//   }
  
// `;



const Footer = styled.footer`
/* 불필요한 포지션 속성 삭제,상대단위 위주 */
  /* position: absolute; */
  /* bottom: -20px; */
  width: 100vw;
  text-align: center;
  /* margin-top: 20px; */
  hr {
    border: 1px solid lightgrey;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export default Home;  