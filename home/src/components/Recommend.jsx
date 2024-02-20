import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getCookie} from '../cookie';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

function Recommend({ goal, selectedCategory }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://34.70.229.21:8080/api/match/person?category="+selectedCategory,
        {
          headers: {
            Authorization:getCookie('is_login'),
            'Content-Type': 'application/json',
          },
        }
      );
     

    setData(response.data);
    console.log('추천메이트:', response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData(); 
  }, [selectedCategory]);
  const handleSelectButtonClick = async () => {
      console.log("My Goal:", goal);
      console.log("Selected category:", selectedCategory);
      console.log(getCookie('is_login'))
      window.alert("매칭을 성공하였습니다");
      try {
        const result = await axios.post(
          "http://34.70.229.21:8080/api/match/relate",
          {
            goal: goal,
            category : selectedCategory,
          },
          {
            headers: {
              Authorization:getCookie('is_login'),
              'Content-Type': 'application/json',
            },
            
          }
        );
        console.log('Response:',result);
        console.log('메이트 매칭 성공');
      } catch (error) {
        console.error(error);
      }
      
    };
  return (
    
    <>
      <h3
        style={{
          fontSize: '2vw',
          display: 'inline-block',
          padding: '40px',
          position: 'relative',
          left: '30vw',
          letterSpacing: '2x',
          borderRadius: '20px',
          fontFamily: 'Poor Story, sans-serif',
          backgroundColor: 'rgb(255, 255, 255)',
        }}
      >
        There is matching mate available right now
      </h3>
      <br />
      
        <span style={{
            fontSize: '2vw',
            letterSpacing: '1px',
            fontFamily: 'Poor Story, sans-serif',
            position: 'relative',
            fontWeight:'bold',
            padding:'1vw',
            left:'42vw',
            top:'-18vh',
            borderRadius:'1vw',
            backgroundColor:'rgb(228, 237, 198)'
            }}>Mate profile</span>
            <ProfileCard >
          <div style={{
            letterSpacing: '1px',
            fontFamily: 'Poor Story, sans-serif',
            
            
          }}>Nickname:   {data?.nickname}</div>
          <div style={{
            letterSpacing: '1px',
            fontFamily: 'Poor Story, sans-serif'
          }}
          >goal:   {data?.goal}</div>
          <div style={{
            letterSpacing: '1px',
            fontFamily: 'Poor Story, sans-serif'
          }}>category:  {data?.category}</div>
          <div style={{
            letterSpacing: '1px',
            fontFamily: 'Poor Story, sans-serif'
          }}>country:  {data?.country}</div>
      </ProfileCard>
      <Link to="/home" style ={{textDecoration: 'none',}} onClick={handleSelectButtonClick}> <Selectmate> SELECT</Selectmate></Link>
      
    </>
  );
}
Recommend.propTypes = {
  goal: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
export default Recommend;

const ProfileCard = styled.div`
  padding: 2vw;
  border-radius: 10px;
  font-size: 2vw;
  display: inline-block;
  position: relative;
  margin:1vw;
  left:26.2vw;
  top:6vh;
  letter-spacing: '1px';
  font-family: 'Poor Story, sans-serif';
  background-color: #f8f8e5;
`;

const Selectmate=styled.button`
      padding:30px;
      font-size: 30px;
      
      border-radius: 1vw;
      background-color:rgb(252, 246, 246);
      margin:30px;
      position:relative;
      display:flex;
      left:42vw;
      top:5vh;
      
    
`
