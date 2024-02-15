// // import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import {Link } from 'react-router-dom';
// function MateProfile() {
// //   const [userData, setUserData] = useState(null);

// //   useEffect(() => {
    
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await fetch('https://example.com/api/userdata');
// //         const data = await response.json();
// //         setUserData(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchUserData();
// //   }, []); 

// return (
//     <>
//     {/* {userData && (
//         <StyledMateProfile>
//         <img src={userData.profileImage} alt="Profile" />
//         <div>
//         <h2>{userData.username}</h2>
//             <p>{userData.hashtags}</p>
//         </div>
//         </StyledMateProfile>
//     )} */}

//         <Link to="/my profile" style={{textDecoration:'none',display:'inline-block'}}> 
//         {/* 상대의 프로필 로드시키는 코드로 바꾸기 */}
//         <ProfileContainer>
//         <img src="mateprofile.jpg" style={{
//         borderRadius:'100%',
//         width:'8vw',
//         height:'8vh'
//         }}/>
//         <h2 style={{fontSize:'2vw', letterSpacing: '0.1vw', padding:'0.5vw'}}>
//         user1 
//         </h2>
//         <h3 style={{fontSize:'1vw',color:'grey', letterSpacing: '0.1vw', padding: '0.5vw'}}>
//         #IT
//         </h3>
//         </ProfileContainer> 
//         {/* 상대의 프로필 정보 받아오기 */}
//         </Link>


//     </>
// );
// }

// const ProfileContainer=styled.button`
//     background-color:rgb(245, 245, 245);
//     width:19vw;
//     height:17vh;
//     padding:1vw;
//     margin:3vw;
//     align-items:center;
//     display:flex;
   
    
   
  
    
// `
// export default MateProfile;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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


    <Link to="/my profile" style={{ textDecoration: 'none', display: 'inline-block' }}>
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
    </Link>
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
