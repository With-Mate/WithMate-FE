
import styled from 'styled-components';
 import MateProfile from './Mateprofile';
import {getCookie} from '../cookie';
import axios from 'axios';
import PropTypes from 'prop-types';
function Recommend({ goal, selectedCategory }) {
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
          },
          {
            headers: {
              Authorization:getCookie('is_login'),
              'Content-Type': 'application/json',
            },
            
          }
        );
        console.log('Response:',result);
        console.log('Success');
      } catch (error) {
        console.error(error);
      }
    };
    
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
        There are matching mates available right now
      </h3>
      <br />

      
        <ProfileCard >
         <MateProfile/>
         {/* <Recmate/> */}
        </ProfileCard>
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
