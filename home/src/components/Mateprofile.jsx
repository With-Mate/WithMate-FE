// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
function MateProfile() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
    
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('https://example.com/api/userdata');
//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUserData();
//   }, []); 

return (
    <>
    {/* {userData && (
        <StyledMateProfile>
        <img src={userData.profileImage} alt="Profile" />
        <div>
        <h2>{userData.username}</h2>
            <p>{userData.hashtags}</p>
        </div>
        </StyledMateProfile>
    )} */}



        <Link to="/my profile" style={{textDecoration:'none'}}> 
        {/* 상대의 프로필 로드시키는 코드로 바꾸기 */}
        <ProfileContainer>
        <img src="mateprofile.jpg" style={{
        borderRadius:'100%',
        width:'8vw',
        height:'8vh'
        }}/>
        <h2 style={{fontSize:'2vw', letterSpacing: '0.1vw', padding:'0.5vw'}}>
        user1 
        </h2>
        <h3 style={{fontSize:'1vw',color:'grey', letterSpacing: '0.1vw', padding: '0.5vw'}}>
        #IT
        </h3>
        </ProfileContainer> 
        {/* 상대의 프로필 정보 받아오기 */}
        </Link>


    </>
);
}

const ProfileContainer=styled.button`
    background-color:rgb(245, 245, 245);
    display:flex;
    align-items:center;
    width:19vw;
    height:17vh;
    padding:1vw;
    margin:3vw;
    position: absolute;
    left:22vw;
    
`
export default MateProfile;
