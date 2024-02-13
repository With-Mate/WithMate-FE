
import styled from 'styled-components';
function NoAvailablemate() {
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

<Wait> WAIT FOR MATE</Wait>
</div>
</>
)


}

const Wait=styled.button`
    padding:20px;
    font-size: 30px;
    background-color: beige;
    margin:30px;
`




export default NoAvailablemate;