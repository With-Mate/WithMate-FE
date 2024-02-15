
import axios from 'axios';
import { getCookie } from '../cookie';

const Recmate = async () => {
  try {
    const response = await axios.get(
      "http://34.70.229.21:8080/api/match/people",
      {
        headers: {
          Authorization: getCookie('is_login'),
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Response:', response);
    console.log('Success');

    // 받아온 정보에서 5개의 프로필을 생성
    const profiles = response.data.slice(0, 5).map((person) => {
      return {
        nickname: person.nickname,
        goal: person.goal,
        category: person.category,
        country: person.country,
      };
    });

    console.log('Profiles:', profiles);

    // 여기서 profiles를 사용하여 원하는 동작을 수행하세요.

  } catch (error) {
    console.error(error);
  }
};

export default Recmate;
