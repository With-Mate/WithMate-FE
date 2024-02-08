
import styled from 'styled-components';
function MyGoal() {

return (
<>
<Message3>
USER1  <br />
BE A GOOD FATHER!
</Message3> 
</>
)
//api 연결

}

const Message3=styled.div`
font-size: 1.5vw;
font-weight: bold;
position: absolute;
bottom: 12vh;
left: 15vh; 
background-color:  rgb(246, 227, 255);
border: 3px solid rgb(199, 148, 207);
padding: 2vw; 
`;

export default MyGoal;