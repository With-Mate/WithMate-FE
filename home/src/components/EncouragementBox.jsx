import styled from 'styled-components';

function EncouragementBox() {
  return (
    <>
      <Message1>
        
      </Message1>
      {/* APi연결해야함 */}
    </>
  );
}

const Message1 = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  position: absolute;
  top: 32vh;
  left: 20vh; 
  background-color: rgb(245, 245, 245);
  border: 2px solid lightgrey;
  padding: 2vw; 
  box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.2);
`;

export default EncouragementBox;
