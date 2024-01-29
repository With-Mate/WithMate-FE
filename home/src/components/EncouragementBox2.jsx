
import styled from 'styled-components';
function EncouragementBox2() {
 return (
    <>
    <Message2>
        USER2: CHEER UP~!
    </Message2>    
    </>
 )

}

const Message2=styled.div`
font-size:30px;
position:absolute;
font-Weight:bold;
top:300px;
right:150px;
background-color:rgb(245, 245, 245);
border: 2px solid lightgrey;
padding:30px;
box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);


`
export default EncouragementBox2;