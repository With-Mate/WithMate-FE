import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import {getCookie} from '../cookie';

Modal.setAppElement('#root');

const ReportModal = ({ isOpen, onClose }) => {
  const handleYesClick = async () => {
   try{
     const response = await axios.patch(
      "http://34.70.229.21:8080/api/mate/unrelate",{
        //patch할 내용 - 500 오류뜸 
      },{
        headers: {
          Authorization:getCookie('is_login'),
          'Content-Type': 'application/json',
        },

      }
     );
     console.log('Response',response);
     console.log('Success');
   }catch(error){
        console.log(error)
      }
      
    onClose(); // 버튼 클릭 후 모달을 닫습니다.
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Report Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '10vw',
          height: '10vh',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: '5px',
          outline: 'none',
          padding: '5vw'
        },
      }}
      ariaHideApp={false} 
    >
      <h2 style={{ fontSize: '1.5vw' }}>Do you want to end your Mate?</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
        <button onClick={handleYesClick} style={{ width: '5.2vw', backgroundColor: 'beige' }}>Yes</button>
        <button onClick={onClose} style={{ width: '5.2vw', backgroundColor: 'beige' }}>No</button>
      </div>
    </Modal>
  );
};

ReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReportModal;
