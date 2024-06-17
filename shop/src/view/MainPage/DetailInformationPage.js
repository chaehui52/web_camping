import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DetailInformationPage.css';
import { useNavigate } from 'react-router-dom';

function DetailInformationPage() {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [adultCount, setAdultCount] = useState(1); // 기본 성인 인원 수 1로 설정
  const [kidCount, setKidCount] = useState(0); // 기본 유아 인원 수 0으로 설정
  const [selectedSite, setSelectedSite] = useState(null); // 선택된 사이트 정보

  const navigate = useNavigate();

  // 임의의 예시 데이터 (실제 서버에서 가져오는 데이터 대신 사용됨)
  const campingInfo = {
    image: 'https://via.placeholder.com/413x241',
    category: '펜션',
    name: '하이원리조트 마운틴콘도',
    address: '강원도 정선군 어쩌고 저쩌고 풀 주소',
    phoneNumber: '010-1234-5678',
    introduction: '숙소 소개',
    description:
      '30m 대형 온수풀을 사계절 이용할 수 있는 신축 펜션입니다. 풀빌라, 키즈, 스탠다드 타입별 객실. 전객실 마운틴뷰 개별 바베큐 등 편의시설을 갖추고 있습니다.',
    amenities: [
      { name: '샤워실', type: 'shower' },
      { name: '화장실', type: 'restroom' },
      { name: '와이파이', type: 'wifi' },
    ],
    activities: [
      { name: '낚시', type: 'fishing' },
      { name: '산책로', type: 'walking' },
      { name: '자전거 경로', type: 'biking' },
    ],
    surroundings: [
      { name: '산/숲', type: 'mountain' },
      { name: '호수', type: 'lake' },
      { name: '해변', type: 'beach' },
    ],
    // 캠핑장의 전체 리뷰 추가
    reviews: [
      { id: 1, user: '사용자1', comment: '너무 좋아요!' },
      { id: 2, user: '사용자2', comment: '가족 여행으로 최고의 선택입니다.' },
      { id: 3, user: '사용자3', comment: '쾌적한 환경에서 휴식하기에 좋은 곳입니다.' },
    ],
    sites: [
      {
        id: 1,
        image: 'https://via.placeholder.com/235x203',
        category: '펜션',
        name: '마운틴 디럭스 온돌',
        checkinTime: '15:00',
        checkoutTime: '11:00',
        maxPeople: '5인',
        price: '150,000원',
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/235x203',
        category: '펜션',
        name: '스탠다드 펜션',
        checkinTime: '14:00',
        checkoutTime: '10:00',
        maxPeople: '4인',
        price: '120,000원',
      },
    ],
  };

  // 이미지 경로를 동적으로 가져오는 함수
  const getImageUrl = (type) => {
    switch (type) {
      case 'shower':
        return 'https://via.placeholder.com/40x40?text=Shower';
      case 'restroom':
        return 'https://via.placeholder.com/40x40?text=Restroom';
      case 'wifi':
        return 'https://via.placeholder.com/40x40?text=WiFi';
      case 'fishing':
        return 'https://via.placeholder.com/40x40?text=Fishing';
      case 'walking':
        return 'https://via.placeholder.com/40x40?text=Walking';
      case 'biking':
        return 'https://via.placeholder.com/40x40?text=Biking';
      case 'mountain':
        return 'https://via.placeholder.com/40x40?text=Mountain';
      case 'lake':
        return 'https://via.placeholder.com/40x40?text=Lake';
      case 'beach':
        return 'https://via.placeholder.com/40x40?text=Beach';
      default:
        return 'https://via.placeholder.com/40x40'; // 기본 이미지
    }
  };

  // 확인 버튼 클릭 처리 함수
  const handleReservation = () => {
    if (!checkInTime || !checkOutTime) {
      alert('입실일과 퇴실일을 선택해주세요.');
      return;
    }

    if (checkOutTime <= checkInTime) {
      alert('퇴실일은 입실일보다 뒤여야 합니다.');
      return;
    }

    // 여기서는 예시로 첫 번째 사이트를 선택
    setSelectedSite(campingInfo.sites[0]);
  };

  // 예약 버튼 클릭 처리 함수
  const handleSubmit = () => {
    if (!selectedSite) {
      alert('사이트를 선택해주세요.');
      return;
    }

    const reservationData = {
      checkInTime: checkInTime,
      checkOutTime: checkOutTime,
      adultCount: adultCount,
      kidCount: kidCount,
      site: selectedSite,
    };

    // 여기서 reservationData를 서버에 전송하거나 필요한 작업을 수행할 수 있습니다.

    // 예약이 완료되었다는 메시지 또는 화면 전환 등을 처리할 수 있습니다.
    alert('예약이 완료되었습니다.');
    navigate('/mypage');
  };

  return (
    <div className="container">
      <h1>상세 정보</h1>
      <div className="camping">
        <img className="camping-info-img" src={campingInfo.image} alt="camping" />
        <div className="camping-info">
          <p className="camping-info-category">{campingInfo.category}</p>
          <h1 className="camping-info-title">{campingInfo.name}</h1>
          <p className="camping-info-address">{campingInfo.address}</p>
          <p className="camping-info-phone">전화번호: {campingInfo.phoneNumber}</p>
          <p className="camping-info-intro">{campingInfo.introduction}</p>
          <p className="camping-info-description">{campingInfo.description}</p>
        </div>
      </div>
      <hr />
      <h1>캠핑 유형</h1>
      <div className="camping-category">
        <div className="category-info">
          <img className="camping-category-icon" src="https://via.placeholder.com/40x40" alt="camping" />
          <p>캠핑</p>
        </div>
      </div>
      <hr />
      <h1>시설 정보</h1>
      <div className="facility-info">
        <h4>부대 시설</h4>
        <div className="amenities-info">
          {campingInfo.amenities.map((item, index) => (
            <div key={index} className="amenity-item">
              <img className="amenity-icon" src={getImageUrl(item.type)} alt={item.name} />
              <p className="amenity-name">{item.name}</p>
            </div>
          ))}
        </div>
        <hr />
        <h4>놀거리</h4>
        <div className="doing-info">
          {campingInfo.activities.map((item, index) => (
            <div key={index} className="activity-item">
              <img className="activity-icon" src={getImageUrl(item.type)} alt={item.name} />
              <p className="activity-name">{item.name}</p>
            </div>
          ))}
        </div>
        <hr />
        <h4>주변 환경</h4>
        <div className="circumstance-info">
          {campingInfo.surroundings.map((item, index) => (
            <div key={index} className="surrounding-item">
              <img className="surrounding-icon" src={getImageUrl(item.type)} alt={item.name} />
              <p className="surrounding-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="manner-time">
        <p>매너타임</p>
        <p>22:00 - 07:00</p>
      </div>
      <hr />
      <div className="user-info">
        <b>입실일, 퇴실일</b>
        <br />
        <DatePicker
          selected={checkInTime}
          onChange={(time) => setCheckInTime(time)}
          showTimeSelect
          timeIntervals={60}
          dateFormat="yyyy년 MM월 dd일 HH:mm"
          timeCaption="시간"
          placeholderText="입실일을 선택하세요"
          className="date-picker"
        />
        &nbsp; ~ &nbsp;
        <DatePicker
          selected={checkOutTime}
          onChange={(time) => setCheckOutTime(time)}
          showTimeSelect
          timeIntervals={60}
          dateFormat="yyyy년 MM월 dd일 HH:mm"
          timeCaption="시간"
          placeholderText="퇴실일을 선택하세요"
          className="date-picker"
        />
        <br />
        <br />
        <b>성인, 유아 인원 수</b>
        <br />
        <div className="count-selector">
          <label>성인</label>
          <input
            type="number"
            value={adultCount}
            onChange={(e) => setAdultCount(parseInt(e.target.value))}
            min={1}
            max={10}
          />
        </div>
        <div className="count-selector">
          <label>유아</label>
          <input
            type="number"
            value={kidCount}
            onChange={(e) => setKidCount(parseInt(e.target.value))}
            min={0}
            max={5}
          />
        </div>
        <br />
        <button onClick={handleReservation}>확인</button>
      </div>
      <hr />
      {selectedSite && (
        <div className="selected-site">
          <h2>선택된 숙소</h2>
          <img className="selected-site-img" src={selectedSite.image} alt="selected site" />
          <div className="selected-site-info">
            <p className="selected-site-category">{selectedSite.category}</p>
            <h1 className="selected-site-title">{selectedSite.name}</h1>
            <p>
              <b>입실 시간:</b> {selectedSite.checkinTime}
            </p>
            <p>
              <b>퇴실 시간:</b> {selectedSite.checkoutTime}
            </p>
            <p>
              <b>최대 인원:</b> {selectedSite.maxPeople}
            </p>
            <p>
              <b>가격:</b> {selectedSite.price}
            </p>
            <hr />
            <h3>리뷰</h3>
            <div className="reviews">
              {campingInfo.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <p>
                    <b>{review.user}:</b> {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <br />
          <button onClick={handleSubmit}>예약</button>
        </div>
      )}
    </div>
  );
}

export default DetailInformationPage;

