import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { getCookie } from '../cookie';
import axios from 'axios';
function MateProfile() {
const [mateName,setmateName]= useState('');
const [mateCategory,setmateCategory]=useState('');
useEffect(() => {
    fetchMateData();
    }, []);

    const fetchMateData = async () => {
      try {
        const response = await axios.get('http://34.70.229.21:8080/api/mate/manage',
        {
        headers: {
        Authorization:getCookie('is_login'),
        'Content-Type': 'application/json',
        },
        });
        const { mateName,mateCategory } = response.data;
        setmateName(mateName);
        setmateCategory(mateCategory);
        console.log(mateName,mateCategory);
        console.log("메이트 정보 가져오기 Success");
    } catch (error) {
        console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
    };



return (
    <>


    
        <ProfileContainer>
        <img
            src="mateprofile.jpg"
            style={{
            borderRadius: '100%',
            width: '8vw',
            height: '8vh'
            }}
        />
       
            <>
            <h2 style={{ fontSize: '2vw', letterSpacing: '0.1vw', padding: '0.5vw' }}>
                {mateName}
            </h2>
            <h3 style={{ fontSize: '1vw', color: 'grey', letterSpacing: '0.1vw', padding: '0.5vw' }}>
                #{mateCategory}
            </h3>
            </>
        
        </ProfileContainer>
   
    </>
);
}

const ProfileContainer = styled.button`
  background-color: rgb(245, 245, 245);
  width: 19vw;
  height: 17vh;
  padding: 1vw;
  margin: 3vw;
  align-items: center;
  display: flex;
`;
// const StyledMateProfile =styled.div`
// `
export default MateProfile;
