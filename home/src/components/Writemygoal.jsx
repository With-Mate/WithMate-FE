import { useState } from 'react';
const Writemygoal = () => {
  const [goal, setGoal] = useState('');

  const handleInputChange = (event) => {
    setGoal(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveGoal();
    }
  };

  const saveGoal = () => {
    
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write your goal..."
        value={goal}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} 
        style={{
          width: '27vw',
          height:'7vw',
          fontSize: '2vw',
        }}
      />
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        <button onClick={saveGoal} style={{
          backgroundColor:'rgb(216, 223, 248)',
          }}>ENTER</button>
      </div>
    </div>
  );
};

export default Writemygoal;

