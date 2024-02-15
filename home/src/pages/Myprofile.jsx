import Nav from '../components/Nav';
import styled from 'styled-components';
import StickerBoard from '../components/StickerBoard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import React from 'react';
import axios from 'axios';
import { getCookie } from '../cookie';

import {useEffect, useRef,useState } from 'react';

const Myprofile= () =>{
  const [username, setUsername] = useState('');
  const [accessDate, setAccessdate] = useState(''); //log(최근접속일자)
  const [signupDate, setSignupdate] = useState(''); //reg(가입일자)
  const sliderRef = useRef(null); // useRef로 sliderRef 정의
  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터 가져오기
    axios.get("http://34.70.229.21:8080/api/self/profile",
    {headers: {
            
             Authorization:getCookie('is_login'),
           },}) 
    .then(response => {
      // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
      console.log(response.data);
      setUsername(response.data.nickname);
      setAccessdate(response.data.loginDate);
      setSignupdate(response.data.regDate);
    })
      .catch(error => {
        console.error('Error fetching stickers:', error);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    arrows: true, // 좌,우 버튼
    centerMode: true, // 중앙 정렬 모드 활성화
    centerPadding: '5vw', // 슬라이드 간의 간격 조정
  };
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
    return (
    <>
    <Nav/>
    <Maincont>
    <Content>
        <info>
          <name>< img  src="profile.jpg" alt='프로필이미지' style={{width:'5vh' ,height:'5vh',  borderRadius: '70%', marginRight:'1vw'}}/> {username} </name>
          
          <date> 
          <span>Registration date : {signupDate}</span>
          <span>Last login date : {accessDate}</span>
          </date>
          </info>

      <BarWrapper>
          <CustomPrevButton onClick={goToPrevSlide}>&lt;</CustomPrevButton>
          <Journeybar>
            <span>n번째 여정 보기</span>
            </Journeybar>
          
            <CustomNextButton onClick={goToNextSlide}>&gt;</CustomNextButton>
      </BarWrapper>
          
        </Content>
        
        </Maincont>
        <SlideWrapper>
          <StyledSlider {...settings} ref={sliderRef}>
         
          <div>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
         
        </div>

        <div>
         
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
        </div>

        <div>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          </div>
          <div>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          <br/>
          <StickerBoard backBoxWidth="70vw" backBoxHeight="70vh" /> 
          </div>
         
         
        

          </StyledSlider>
        </SlideWrapper>
        
        </>
      )
}


export default Myprofile;


const Journeybar = styled.div`
width : 40vw;
height: 5vh;
display: flex;
  justify-content: flex-start;
  align-items: center;
/* margin-left: 10vw; */
/* margin-right: 10vw;  */
background-color: rgb(246, 227, 255);
border-Radius : 40px 40px 40px 40px;
/* overflow: visible; */
/* height: 7%;
left : 50%; */
/* top:70%;*/
margin-top: 5vh;
/* flex-direction: column; */
/* transform: translateX(-50%); */
/* display: flex; */
/* position: absolute; */
/* text-align: left; */
margin-bottom: 5vh;
text-align: left;
span{
    /* position: absolute; */
    font-family: 'Nanum Gothic', sans-serif;
    /* top : 50%;
    left:2%; */
    text-decoration:solid;
    font-weight: bold;
    margin-left: 5%;
    /* margin-left: 10%;
    margin-top: 50%; */
    /* transform: translateY(-50%); */
    /* font-family: 'Arial, sans-serif'; */
    font-weight: bold;
    
}


`;
const Content = styled.header`
display: flex;
  flex-direction: column;
  align-items: center;

info{
margin-top: 5vh;
display: flex;
flex-direction: column;
background-color:rgb(246, 247, 223);

/* position: absolute; */
/* left : 50%;
margin-top: 3%;
transform: translateX(-50%); */

width: 55vw;
height: 15vh;
}    
name{
/* 
position: absolute; */
display: flex;
flex-direction: row;
margin-left : 5vw;
margin-top : 2vh;
font-size : 30px;
font-weight: bold;
margin-bottom: 1vh;
}

date{
display: flex;
flex-direction: column;
/* position : absolute; */
/* margin-right : 5%; 
bottom : 5%;  */
/* margin-left : 80%;
margin-bottom: 1%; */
margin-left:auto;
margin-right: 3%;
font-weight: 500;
/* background-color: yellow; */

span{
 font-size :1rem ;
}
}
`

const Maincont = styled.div `

  display: flex;
  flex-direction: column;
  align-items: center;
`
const SlideWrapper = styled.div `
  background-color:rgb(246, 247, 223);

  width: 80vw; // 슬라이더의 너비 설정
  margin: 0 auto; // 가운데 정렬을 위해 필요한 스타일
  
  /* justify-content: center; 
  display: flex; */
  /* margin-left:10vw; */
  /* display: flex;
  justify-content: center; 
  /* margin-top: 20px; 슬라이더 위 여백 조절 */
`;
const StyledSlider = styled(Slider)`
    height:100%;
    /* width:100%; */
    
    .slick-list{
        height:100%;
        /* text-align: center; */
        /* display: flex;
        align-items: center; */
        /* display: grid;
      place-items: center; 자식 요소를 가운데 정렬 */
    }
    .slick-prev{
        left: 10px;
        z-index: 999;
    }

    .slick-next{
        right:10px;
    }
`

const BarWrapper = styled.div `
 display: flex;
  align-items: center;
  justify-content: space-between;

`


const CustomPrevButton = styled.button`
  width : 10vw;
    height:10vh;
    font-size:2rem;
    background-color:white;
    font-weight:bold;
    border:none;
    color:rgb(56, 29, 2);
`;

const CustomNextButton = styled.button`
  width : 10vw;
    height:10vh;
    font-size:2rem;
    background-color:white;
    font-weight:bold;
    border:none;
    color:rgb(56, 29, 2);
`;