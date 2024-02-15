
import styled from 'styled-components';
import axios from 'axios';
import {getCookie} from '../cookie';
import PropTypes from 'prop-types';

function NoAvailablemate({goal,selectedCategory}) {
    const handleWaitButtonClick = async () => {
      console.log("My Goal:", goal);
      console.log("Selected category:", selectedCategory);
      console.log(getCookie('is_login'))
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
        console.log('Success');
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

<Wait onClick={handleWaitButtonClick}> WAIT FOR MATE</Wait>
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