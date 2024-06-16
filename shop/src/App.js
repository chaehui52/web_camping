
import MainPage from './view/MainPage/MainPage';
import DetailInformationPage from './view/MainPage/DetailInformationPage';
import LoginPage from './view/LoginPage/LoginPage';
import MyPage from './view/MyPage/MyPage';
import RegisterCampingPage from './view/RegisterPage/RegisterCampingPage';
import RegisterSitePage from './view/RegisterPage/RegisterSitePage';
import ReservationPage from './view/ReservationPage/ReservationPage';
import ReservationSuccessPage from './view/ReservationPage/ReservationSuccessPage';
import SearchResultPage from './view/MainPage/SearchResultPage';
import WriteReviewPage from './view/ReviewPage/WriteReviewPage';
import WriteReviewCheck from './view/ReviewPage/WriteReviewCheck';

const reservations = [
  {
    type: '캠핑',
    campName: '캠프장 A',
    city: '서울',
    town: '강남구',
    detailAddress: '123-456번지',
    checkIn: '2024-07-01',
    checkOut: '2024-07-03',
    adultCount: 2,
    childCount: 1,
    status: '이용 전',
    imgSrc: '/path/to/image.jpg'
  },
  {
    type: '캠핑',
    campName: '캠프장 B',
    city: '대구',
    town: '수성구',
    detailAddress: "123-5번지",
    checkIn: '2024-05-05',
    checkOut: '2024-06-01',
    adultCount: 1,
    childCount: 1,
    status: '이용 후',
    imgSrc: '/path/to/image.jpg'
  },
  {
    type: '펜션',
    campName: '펜션A',
    city: '서울',
    town: '어딜까',
    detailAddress: "상세 주소랍니다",
    checkIn: '2024-04-06',
    checkOut: '2024-07-09',
    adultCount: 5,
    childCount: 1,
    status: '이용 취소',
    imgSrc: '/path/to/image.jpg'
  }
  // 추가 예약 데이터들...
];

const ClientID = 'user123'; // 임시 클라이언트 ID

const results = [
  {
    imgSrc: "path/to/image1.jpg",
    type: "펜션",
    name: "하이원리조트 마운틴콘도",
    address: "강원도 정선군 뭐시기 저시기 풀 주소",
    price: "100,300원"
  },
  {
    imgSrc: "path/to/image2.jpg",
    type: "리조트 / 호텔",
    name: "하이원리조트 힐콘도",
    address: "강원도 정선군 뭐시기 저시기",
    price: "150,000원"
  },
  {
    imgSrc: "path/to/image3.jpg",
    type: "리조트 / 호텔",
    name: "하이원 그랜드 호텔",
    address: "강원도 정선군 뭐시기 저시기",
    price: "520,000원"
  }
];

function App() {
  //return <LoginPage/>
  //return <MainPage/>
  //return <SearchResultPage results={results} />
  return <DetailInformationPage/>
  //return <RegisterSitePage/>
  //return <WriteReviewPage/>
  //return <RegisterCampingPage/>
  //return <MyPage ClientID={ClientID} reservations={reservations} />
}

export default App;
