// ReportModal.jsx

import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ReportModal = ({ isOpen, onClose }) => {
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
        //   display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: '5px',
        //   outline: 'none',
          padding:'5vw'
          
        },
      }}
    >
      <h2 style={{fontSize:'1.2vw'}}>Do you want to meet this mate again?</h2>
     
      <button onClick={onClose} style={{width:'4vw',backgroundColor:'beige'}}>No</button>
      <button onClick={onClose} style={{width:'4vw',backgroundColor:'beige'}}>Yes</button>
    </Modal>
  );
};

ReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReportModal;
