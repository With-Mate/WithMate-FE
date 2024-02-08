import styled from 'styled-components';
// import Mateprofile from'./Mateprofile';
// import PropTypes from 'prop-types';


function Recommend () {
//    const [userProfile, setUserProfile] = useState(null);
// const fetchData = async () => {
//     try {
//       const response = await fetch('API_ENDPOINT'); // API_ENDPOINT를 실제 API 주소로 대체
//       const data = await response.json();
//       setUserProfile(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []); 
return (
<>
   {/* {userProfile && (
        <>
          <h3 style={{   fontSize: '25px',
                    display: 'inline-block',
                    padding: '40px',
                    letterSpacing: '2x',
                    borderRadius:'20px',
                    fontFamily: 'Poor Story, sans-serif',
                    backgroundColor:'rgb(252, 246, 246)'}}>
            There are matching mates available right now
          </h3>
          userProfile 데이터를 사용한 JSX
          <MATE>
            {`USER${userProfile.id} ${userProfile.hashtags} ${userProfile.country}`}
          </MATE>
          
        </>
      )}
    </>
  );
}

Recommend.propTypes = {
  userProfile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    hashtags: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};  */}
<h3 style={{
                    fontSize: '25px',
                    display: 'inline-block',
                    padding: '40px',
                    letterSpacing: '2x',
                    borderRadius:'20px',
                    fontFamily: 'Poor Story, sans-serif',
                    backgroundColor:'rgb(252, 246, 246)'
                }}>
                There are matching mates available right now
                </h3>
                <br/>
{/* 상대방 프로필 가져오는 코드로 바꾸기 */}
<div style={{display:'flex', alignitems:'center', padding:'3vw',backgroundColor: '#f5f5e7', margin:'1vh',position:'inline-block'}}>
<img src="mateprofile.jpg" style={{
        borderRadius:'100%',
        width:'8vw',
        height:'8vh'
        }}/>
        <h2 style={{fontSize:'2vw', letterSpacing: '0.1vw', padding:'0.5vw'}}>
        user1 
        </h2>
        <h3 style={{fontSize:'1vw',color:'grey', letterSpacing: '0.1vw', padding: '0.5vw'}}>
        #IT
        </h3>
        </div>

<div style= {{
    fontSize:'2vw',
    letterSpacing: '1px',
    fontFamily: 'Poor Story, sans-serif'
}}>
    Period: 4 weeks (28 days)
</div>
<Selectmate> SELECT</Selectmate>
</>
)


}
export default Recommend;

const Selectmate=styled.button`
    padding:30px;
    font-size: 30px;
    background-color: beige;
    margin:30px;
`