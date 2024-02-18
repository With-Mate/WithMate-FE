// import axios from 'axios';
// import { getCookie } from '../cookie';
// import { useState, useEffect } from 'react'; // 추가된 부분

// const Recmate = () => {
//   const [profiles, setProfiles] = useState([]); // profiles 상태 추가
//   const[category,setCategory]=useState('');

//   useEffect(() => {
//     fetchData();
//     Category();
//   }, []);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://34.70.229.21:8080/api/match/people",
//           {
//             headers: {
//               Authorization: getCookie('is_login'),
//               'Content-Type': 'application/json',
//             },
//           }
//         );
        
//         console.log('메이트 리스트 추천Success');
//         const data = response.data.slice(0, 5).map((person) => {
//           return {
//             nickname: person.nickname,
//             goal: person.goal,
//             category: person.category,
//             country: person.country,
//           };
//         });
//         setProfiles(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     const Category = async () => {
//       try {
//         const response = await axios.get('http://34.70.229.21:8080/api/home',
//         {
//         headers: {
//         Authorization:getCookie('is_login'),
//         'Content-Type': 'application/json',
//         },
//         });
//         const {category } = response.data;
        
//         setCategory(category);
//         console.log("나의 카테고리:",category);
//     } catch (error) {
//         console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
//     }
//     };
//     const filteredProfiles = profiles.filter((profile) => profile.category === category);
//     console.log("나와 카테고리 같은 메이트:",filteredProfiles);
//   return (
//     <>
//       {filteredProfiles.length > 0 ? (
//         filteredProfiles.map((profile) => (
//           <div key={profile.nickname}>
//             <p>Nickname: {profile.nickname}</p>
//             <p>Goal: {profile.goal}</p>
//             <p>Category: {profile.category}</p>
//             <p>Country: {profile.country}</p>
//           </div>
//         ))
//       ) : null}
      
//     </>
//   );
// };

// export default Recmate;
