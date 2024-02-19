
import styled from 'styled-components';
import axios from 'axios';
import {getCookie} from '../cookie';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

function NoAvailablemate({goal,selectedCategory}) {
    const handleWaitButtonClick = async () => {
      window.alert("메이트 기다리기를 눌렀습니다")
      try {
        const result = await axios.post(
          "http://34.70.229.21:8080/api/match/register",
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
        console.log('goal,category,wait 성공 ');
      } catch (error) {
        console.error(error);
      }
    };
return (
    <>
<div style={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<h3 style={{
                    fontSize: '25px',
                    display: 'inline-block',
                    padding: '40px',
                    letterSpacing: '2x',
                    borderRadius:'20px',
                    fontFamily: 'Poor Story, sans-serif',
                    backgroundColor:'rgb(252, 246, 246)'
                }}>
                No mates available for recommendation
                </h3>
                <br/>
<br/>
<br/>
<br/>

<Link to="/" style={{textDecoration: 'none'}} onClick={handleWaitButtonClick}> <Wait>WAIT FOR MATE</Wait></Link>
</div>
</>
)


}

NoAvailablemate.propTypes = {
    goal: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired,
  };
const Wait=styled.button`
    padding:20px;
    font-size: 30px;
    background-color: beige;
    margin:30px;
`




export default NoAvailablemate;