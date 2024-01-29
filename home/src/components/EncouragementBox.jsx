
import styled from 'styled-components';
function EncouragementBox() {
return (
    <>
    <Message5>
      USRER1: You are the best!
    </Message5>    
    </>
 )

}

const Message5=styled.div`
font-size:30px;
position:absolute;
font-Weight:bold;
top:300px;
left:70px;
background-color:rgb(245, 245, 245);
border: 2px solid lightgrey;
padding:30px;
box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);


`
export default EncouragementBox;
