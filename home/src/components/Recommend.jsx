import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getCookie} from '../cookie';
import axios from 'axios';
import PropTypes from 'prop-types';
function Recommend({ goal, selectedCategory }) {
  const [data, setData] = useState(null);
  const handleSelectButtonClick = async () => {
      console.log("My Goal:", goal);
      console.log("Selected category:", selectedCategory);
      console.log(getCookie('is_login'))
      try {
        const result = await axios.post(
          "http://34.70.229.21:8080/api/match/relate",
          {
            goal: goal,
            category : selectedCategory,
            //메이트에 대한 관계 body에 추가되어야할듯 
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
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://34.70.229.21:8080/api/match/people?category="+selectedCategory,
          {
            headers: {
              Authorization:getCookie('is_login'),
              'Content-Type': 'application/json',
            },
            // params: {
            //   category: selectedCategory, // 쿼리 파라미터 추가
            // },
          }
        );

        console.log('카테고리같은 추천메이트:', response);
        setData(response.data); // 받은 데이터를 상태에 저장
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 함수 실행
  }, [selectedCategory]);
  return (
    <>
      <h3
        style={{
          fontSize: '25px',
          display: 'inline-block',
          padding: '40px',
          position: 'relative',
          left: '35vw',
          letterSpacing: '2x',
          borderRadius: '20px',
          fontFamily: 'Poor Story, sans-serif',
          backgroundColor: 'rgb(252, 246, 246)',
        }}
      >
        There is matching mate available right now
      </h3>
      <br />
      {data && (
        <ProfileCard>
          {/* data를 사용하여 화면에 표시 */}
          <p>Nickname: {data.nickname}</p>
          <p>Goal: {data.goal}</p>
          <p>Category: {data.category}</p>
          <p>Country: {data.country}</p>
        </ProfileCard>
      )}
        <div
        style={{
          fontSize: '2vw',
          letterSpacing: '1px',
          fontFamily: 'Poor Story, sans-serif',
          position: 'relative',
          left: '40vw',
        }}
      >
        Period: 4 weeks (28 days)
      </div>
      <Selectmate onClick={handleSelectButtonClick}> SELECT</Selectmate>
    </>
  );
}
Recommend.propTypes = {
  goal: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
export default Recommend;

const ProfileCard = styled.div`
  padding: 20px;
  
  border-radius: 10px;
  display: inline-block;
  position: relative;
  left:35vw;
`;

const Selectmate=styled.button`
     padding:30px;
     font-size: 30px;
     background-color: beige;
     margin:30px;
     position:relative;
     display:flex;
     left:42vw;
    
`
