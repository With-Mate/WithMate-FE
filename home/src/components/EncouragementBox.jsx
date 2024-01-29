// import { useState } from 'react';
// import styled from 'styled-components';

// const EncouragementBox = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState('choose your encouragement message');

//   const encouragementMessages = [
//     "You're capable of turning dreams into reality.",
//     "You're not alone – I'm here cheering you on!",
//     "Don't forget to enjoy the journey.",
//     "You've got the talent and spirit.",
//     "Sending positive vibes your way.",
//     "You're not alone in this journey.",
//     "Your journey is unique:)",
//     "Believe in your potential.",
//     "You're stronger than you think.",
//     "Keep going at your own pace. We're making progress.",
//     "Believe in the soft strength within you",
//     "Sending you warmth and encouragement",
//     "Take each step with kindness towards yourself.",
//     "You're not alone, and you're more capable than you realize."

//   ];

//   const handleButtonClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleDropdownChange = (event) => {
//     const selectedMessage = event.target.value;
//     setSelectedMessage(selectedMessage);
//     // setSelectedMessageToApi(selectedMessage);
//     setShowDropdown(false);
//   };

//   return (
//     <EncouragementContainer>
//       <Button onClick={handleButtonClick}>Give an encouragement to yout mate!</Button>

//       {showDropdown && (
//         <Dropdown onChange={handleDropdownChange} value={selectedMessage}>
//           <option disabled>choose your encouragement message</option>
//           {encouragementMessages.map((message, index) => (
//             <option key={index} value={message}>
//               {message}
//             </option>
//           ))}
//         </Dropdown>
//       )}

//       <Message>{selectedMessage}</Message>
//     </EncouragementContainer>
//   );
// };

// const EncouragementContainer = styled.div`
//   text-align: left;

// `;

// const Button = styled.button`

//   background-color: rgb(201, 181, 219);
//   color: black;

// `;

// const Dropdown = styled.select`

//   font-size: 16px; 
// `;

// const Message = styled.p`
//   margin-top: 10px;
//   font-weight: bold;
//   font-size: 25px;
// `;

// export default EncouragementBox;

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
