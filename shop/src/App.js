import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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
  }
  // 추가 예약 데이터들...
];

const ClientID = 'user123'; // 임시 클라이언트 ID



const reviews = [
  {
    imgSrc: '/path/to/image1.jpg',
    title: '제목제목',
    content: '내용내용',
  }
  // 추가 리뷰를 여기에 추가하세요
];

const registerSites = [
  {
    name: "야옹",
    checkInTime: "AM 9:00",
    checkOutTime: "PM 16:00",
    type: "캠핑장",
    price: "100,000원",
    imgSrc: '/path/to/image1.jpg'
  }
]

const registerCampinges = [
  {
    name: "캠핑장",
    city: '서울',
    town: '강남구',
    detailAddress: '123-456번지',
    number: "053-632-6837",
    mannertimestart : "PM 10:00",
    mannertimeend : "AM 6:00",
    type : "캠핑장",
    playing: "낚시",
    surrounding : "바다"
  }
]

function App() {
  const [registerCampinges, setRegisterCampinges] = useState([]);

  const handleAddCamping = (newCamping) => {
    setRegisterCampinges((prev) => [...prev, newCamping]);
  };


  // return <LoginPage/>
  //return <MainPage/>
  //return <SearchResultPage results={results} />
  //return <DetailInformationPage/>
  //return <RegisterSitePage/>
  // return <WriteReviewPage/>
  return <RegisterCampingPage/>
  // return <WriteReviewCheck reviews={reviews} />

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/search-results" element={<SearchResultPage />} />
        <Route path="/detail/:groundID" element={<DetailInformationPage/>}/>
        <Route path="/register" element={<RegisterSitePage/>}/>
        <Route path="/register-camping" element={<RegisterCampingPage onAddCamping={handleAddCamping}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
