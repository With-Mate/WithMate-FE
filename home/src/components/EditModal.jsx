import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getCookie } from '../cookie';


const EditModal = ({ isOpen, onClose, sticker, onUpdateSticker, stickerId,setMyStickerCount}) => {
  const [editedText, setEditedText] = useState('');
  const [editedImpression, setEditedImpression] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [initialColorGenerated, setInitialColorGenerated] = useState('');
  // const [isMine,setIsmine] = useState();
  const [selectedSticker,setSelectedSticker]=useState({});
 
  useEffect(() => {
    console.log(stickerId)
    axios.get(`http://34.70.229.21:8080/api/sticker/select?id=${stickerId}`, 
    // {params: { id: stickerId}},
    {headers :   {  Authorization:getCookie('is_login')}}
     )
     .then(response => {
      // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
      console.log(response.data);
      setEditedText(response.data.content);
      setEditedImpression(response.data.impression);
      console.log(response.data.isMine);
      // setIsmine(response.data.isMine);
     const Mine = response.data.isMine;
     console.log(Mine)
      // console.log(isMine)
      setSelectedSticker(prevState => ({
        ...prevState, // 이전 상태를 복사
        title : response.data.title,
        content : response.data.content,
        impression : response.data.impression,
        stickerColor : response.data.stickerColor,
      }));
      console.log("목표 get 완료");
      if(Mine===false){
        alert("You cannot edit stickers created by your mate");
        console.log("alert");
        onClose();
      }
    })
     .catch(error => {
        console.error('편집화면 get 실패:', error);
      });

    // setEditedText(sticker.memo || '');
    // setEditedImpression(sticker.impression || '');
  
    // 초기 색상 설정
    setCurrentColor(sticker.color || 'white');
    setInitialColorGenerated(sticker.color || 'white'); // 초기 색상을 설정

  }, []);
// isOpen, sticker,stickerId,isMine
  const handleSave = () => {
    const updatedSticker = {
      ...sticker,
      memo: editedText,
      impression: editedImpression,
      color: currentColor,
    };
    onUpdateSticker(updatedSticker);
    console.log("제출된값:"+editedImpression);
    axios.patch("http://34.70.229.21:8080/api/sticker/edit", 
    {
      id : stickerId,
    title : selectedSticker.title,
  content   : editedText,
  impression: editedImpression,
  stickerColor:currentColor,
    },
    // {params: { id: stickerId}},
    {headers :   {  Authorization:getCookie('is_login')}}
     )
     .then(response => {
      // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
      // console.log(response.data);
      // setEditedText(response.data.content);
      // setEditedImpression(response.data.impression);
      // console.log(response.data.isMine);
      // setIsmine(response.data.isMine);
      // console.log(isMine)
      console.log(response);
      
      console.log("메모 patch 완료");
    })
     .catch(error => {
        console.error('메모 patch 실패:', error);
      });
    onClose();
  };


  const handleEdit = (event) => {
    const memo = event.target.value;
    console.log("새 메모 : "+memo);
    setEditedText(memo);
  }
  const handleImpressionChange = (event) => {
    const impression = event.target.value;
    console.log("imp:"+impression);
    setEditedImpression(impression);
    console.log("새 느낀점 : "+editedImpression);
    
    console.log(event.target.value);
    
    // console.log("새 느낀점 : "+editedImpression);

    // 느낀 점이 처음 입력될 때만 색상 변경
   
      // 느낀 점이 처음 입력될 때만 색상 변경
      if (impression.length > 0 && initialColorGenerated === 'white') {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          setCurrentColor(randomColor);
          setInitialColorGenerated(randomColor); // 랜덤 색상으로 업데이트
      }
  
  };
const handleDelete =()=>{
  console.log(stickerId);
  axios.delete(`http://34.70.229.21:8080/api/sticker/delete?id=${stickerId}`, 
  {headers :   {  Authorization:getCookie('is_login')}})
  .then(response => {
    // 백엔드에서 받은 데이터를 스티커 객체로 변환하여 세팅
    // console.log(response.data);
    // setEditedText(response.data.content);
    // setEditedImpression(response.data.impression);
    // console.log(response.data.isMine);
    // setIsmine(response.data.isMine);
    // console.log(isMine)
    console.log(response);
    
    console.log("스티커 delete 완료");
    
    onClose();
    //  window.location.reload();
    setMyStickerCount(prev => prev-1);

  })
   .catch(error => {
      console.error('스티커 delete 실패:', error);
    });

}
  const colors = [
    "rgb(245, 195, 195)",
    "rgb(150, 209, 192)",
    "rgb(241, 196, 237)",
    "rgb(164, 209, 227)",
    "rgb(218, 238, 165)",
    "rgb(220, 181, 234)",
    "rgb(184, 234, 183)",
    "rgb(252, 175, 139)",
  ];

  return (
    <>
       {isOpen && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <p>Edit Sticker Text</p>
            <Textarea
              placeholder="write a note about this goal here"
              value={editedText}
              onChange={handleEdit}
            />
            <Textarea
              placeholder="Write down what you have learned and felt through the course of your goals here. You can modify this after registering, but not initializing to a blank!"
              value={editedImpression}
              onChange={handleImpressionChange}
            />
            <ButtonContainer>
              <SaveButton onClick={handleSave} >Save</SaveButton>
              <DeleteButton onClick={handleDelete}>delete</DeleteButton>
              {/* <button>d</button> */}
            </ButtonContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sticker: PropTypes.object.isRequired,
  onUpdateSticker: PropTypes.func.isRequired,
  stickerId : PropTypes.number.isRequired,
  setMyStickerCount:PropTypes.func.isRequired
};

const ModalBackground = styled.div`
   background: rgba(178, 220, 244, 0.417);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 */
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  height: 70%;
  width: 40%;
  
  padding: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 1000;
  
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: right; */
  display: flex-end;
  /* background-color: pink; */
  width: 100%;
  height: 50%;
  margin-top: 10px;
  
`;

const Button = styled.button`
  /* margin-left: 10vw;
  margin-right: 10vw; */
  /* padding: 5px 10px; */
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background-color: black;
  color:black;
  margin-left:5vw ;
  
`;

const SaveButton = styled(Button)`
  background-color: #007bff;
  color: black;
  margin-right: 10vw;
`;

export default EditModal;
