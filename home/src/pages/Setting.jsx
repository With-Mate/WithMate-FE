import styled from 'styled-components';
import Nav from '../components/Nav';
import axios from 'axios';
import { getCookie } from '../cookie';
import { useState,useEffect } from 'react'; 
const Setting= () =>{
    const [userName, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setNation] = useState('');
  
    useEffect(() => {
      fetchUserInfo();
    }, []);
  
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://34.70.229.21:8080/api/settings',
        {
            headers: {
              Authorization:getCookie('is_login'),
              'Content-Type': 'application/json',
            },
            
          });
        const { userName, nickname, email, birth, country } = response.data;
        setName(userName);
        setNickname(nickname);
        setEmail(email);
        setBirth(birth);
        setNation(country);
        console.log("내 정보 가져오기 성공");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <>
        <header>
        <Nav/>
        </header>
        
            <Myinformation>
            <h2 style={{ textAlign: 'center', fontSize: '2vw',  }}>Information</h2>
        <h3 style={{ color:'grey',position: 'absolute', left: '35vw', top: '20vh', padding: '2vw', fontSize: '2vw' }}>Name</h3>
        <h3 style={{ position: 'absolute', left: '55vw', top: '20vh', padding: '2vw', fontSize: '2vw' }}>{userName}</h3>
        <h3 style={{ color:'grey',position: 'absolute', left: '35vw', top: '30vh', padding: '2vw', fontSize: '2vw' }}>ID</h3>
        <h3 style={{ position: 'absolute', left: '55vw', top: '30vh', padding: '2vw', fontSize: '2vw' }}>{nickname}</h3>
        <h3 style={{ color:'grey',position: 'absolute', left: '35vw', top: '40vh', padding: '2vw', fontSize: '2vw' }}>E-mail</h3>
        <h3 style={{ position: 'absolute', left: '50vw', top: '40vh', padding: '2vw', fontSize: '2vw' }}>{email}</h3>
        <h3 style={{ color:'grey',position: 'absolute', left: '35vw', top: '50vh', padding: '2vw', fontSize: '2vw' }}>Birth</h3>
        <h3 style={{ position: 'absolute', left: '52vw', top: '50vh', padding: '2vw', fontSize: '2vw' }}>{birth}</h3>
        <h3 style={{color:'grey', position: 'absolute', left: '35vw', top: '60vh', padding: '2vw', fontSize: '2vw' }}>Nation</h3>
        <h3 style={{ position: 'absolute', left: '55vw', top: '60vh', padding: '2vw', fontSize: '2vw' }}>{country}</h3>
    
            </Myinformation>
           
        
        </>
    )
}
export default Setting;
const Myinformation=styled.div`
  
`


// 만약 별명 수정이 가능하다면 

// const handleNicknameChange = (event) => {
//     setNickname(event.target.value);
//   };

//   const handleNicknameUpdate = async () => {
//     try {
//       const response = await axios.patch(
//         'http://34.70.229.21:8080/api/settings/update',
//         { nickname },
//         {
//           headers: {
//             Authorization: getCookie('is_login'),
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//        수정 완료 후 필요한 작업 수행
//     } catch (error) {
//       console.error(error);
//     }
//   };
// <div>
//           <label htmlFor="nickname">Nickname:</label>
//           <input type="text" id="nickname" value={nickname} onChange={handleNicknameChange} />
//           <button onClick={handleNicknameUpdate}>Update</button>
//         </div>