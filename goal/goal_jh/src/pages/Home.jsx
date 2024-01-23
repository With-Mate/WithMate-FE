import styled from 'styled-components';
import  { useState } from 'react';


const Home = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
    <BackBox>
      <h2>이번 일주일 도전</h2>
      <img src="mate.png" alt="mate image" />
      <button onClick={openModal}>Put our sticker!</button>

      {/* 모달 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <span onClick={closeModal}>&times;</span>
            {/* 모달 내용 추가 */}
            <p>This is the modal content.</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </BackBox>
    
    <Footer>
      
      <hr/>
      라이센스 : 
    </Footer>
   
  
    </div>
  
  );
};

const BackBox= styled.div`
  width: 1600px;
  height:750px;
  background-color: RGB(228, 215, 183);
  position: relative; /* 변경된 부분 */
  top: 50vh; /* 변경된 부분 */
  left: 50%;
  bottom: 200px;
  transform: translate(-50%, -50%);
img {
  width: 20%; /* 부모 요소에 꽉 차게 이미지 크기 조절 */
  height: 20%; /* 부모 요소에 꽉 차게 이미지 크기 조절 */
  object-fit: cover; /* 이미지 비율 유지하면서 부모 요소에 꽉 차게 채우기 */
  position: absolute;
    bottom: 10%;
    left: 0;
}
button{
  width:150px;
  height:70px;
  background-color: lightgrey;
  position: absolute;
    bottom: 7%;
    right: 5%;
}
h2{
  width:200px;
  height:60px;
  background-color: RGB(207, 203, 228);
  color:rgb(136, 86, 50);
  position: absolute;
    top: -50px;
    left: 5%;
    display: flex;
  align-items: center;
  justify-content: center;
}

`;

const Footer = styled.footer`
  position: absolute;
  bottom: -20px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  hr {
    border: 1px solid lightgrey;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;


export default Home;