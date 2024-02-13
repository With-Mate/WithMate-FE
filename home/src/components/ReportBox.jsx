// import { useState } from 'react';
// import styled from 'styled-components';
// import ReportModal from './ReportModal';

// const ReportBox = () => {
//   const [reportContent, setReportContent] = useState('');
//   const [isReportSubmitted, setIsReportSubmitted] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const handleInputChange = (e) => {
//     setReportContent(e.target.value);
//   };

//   const handleReportSubmit = () => {
//     setIsReportSubmitted(true);
//     setReportContent('');
//     console.log('Report submitted', reportContent);
//     setModalIsOpen(true); // 모달 열기
//   };

//   const closeModal = () => {
//     setModalIsOpen(false); // 모달 닫기
//   };

//   return (
//     <ReportInputContainer>
//       <ReportTextArea
//         placeholder={
//           isReportSubmitted
//             ? 'Report submitted successfully.'
//             : 'Please provide a report about your mate.'
//         }
//         value={reportContent}
//         onChange={handleInputChange}
//       />
//       <SubmitButtonContainer>
//         <SubmitButton onClick={handleReportSubmit}>Submit</SubmitButton>
//       </SubmitButtonContainer>
//       <ReportModal isOpen={modalIsOpen} onClose={closeModal} />
//     </ReportInputContainer>
//   );
// };

// const ReportInputContainer = styled.div`
//   text-align: center;
//   position: relative;
//   top: 30vh;
// `;

// const ReportTextArea = styled.textarea`
//   width: 50vw;
//   height: 40vh;
//   padding: 1vh;
//   font-size: 2vw;
// `;

// const SubmitButtonContainer = styled.div`
//   position: absolute;
//   bottom: -6vh;
//   right: 25vh;
//   transform: translateX(-50%);
// `;

// const SubmitButton = styled.button`
//   background-color: #fad3d3;
//   color: #4a0303;
//   padding: 1vw;
//   width: 6vw;
//   font-size: 1vw;
//   font-weight: bold;
//   cursor: pointer;
// `;

// export default ReportBox;
// ReportBox.jsx

import { useState } from 'react';
import styled from 'styled-components';
import ReportModal from './ReportModal';

const ReportBox = () => {
  const [reportContent, setReportContent] = useState('');
  const [isReportSubmitted, setIsReportSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setReportContent(e.target.value);
  };

  const handleReportSubmit = () => {
    if (reportContent.length < 1) {
      alert('Please provide at least 1 word for the report.');
      return;
    }

    setIsReportSubmitted(true);
    setReportContent('');
    console.log('Report submitted', reportContent);
    setModalIsOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setModalIsOpen(false); // 모달 닫기
  };

  return (
    <ReportInputContainer>
      <ReportTextArea
        placeholder={
          isReportSubmitted
            ? 'Report submitted successfully.'
            : 'Please provide a report about your mate.'
        }
        value={reportContent}
        onChange={handleInputChange}
      />
      <SubmitButtonContainer>
        <SubmitButton onClick={handleReportSubmit}>Submit</SubmitButton>
      </SubmitButtonContainer>
      <ReportModal isOpen={modalIsOpen} onClose={closeModal} />
    </ReportInputContainer>
  );
};

const ReportInputContainer = styled.div`
  text-align: center;
  position: relative;
  top: 30vh;
`;

const ReportTextArea = styled.textarea`
  width: 50vw;
  height: 40vh;
  padding: 1vh;
  font-size: 2vw;
`;

const SubmitButtonContainer = styled.div`
  position: absolute;
  bottom: -6vh;
  right: 25vh;
  transform: translateX(-50%);
`;

const SubmitButton = styled.button`
  background-color: #fad3d3;
  color: #4a0303;
  padding: 1vw;
  width: 6vw;
  font-size: 1vw;
  font-weight: bold;
  cursor: pointer;
`;

export default ReportBox;
