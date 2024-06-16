import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DetailInformationPage.css';

function DetailInformationPage() {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  return (
    <div className="container">
      <h1>상세 정보</h1>
      <div className="camping">
        <img className="camping-info-img" src="https://via.placeholder.com/413x241" alt="camping"/>
        <div className="camping-info">
          <p className="camping-info-category">펜션</p>
          <h1 className="camping-info-title">하이원리조트 마운틴콘도</h1>
          <p className="camping-info-address">강원도 정선군 어쩌고 저쩌고 풀 주소</p>
          <p className="camping-info-phone">전화번호: 010-1234-5678</p>
          <p className="camping-info-intro">숙소 소개</p>
          <p className="camping-info-description">
            30m 대형 온수풀을 사계절 이용할 수 있는 신축 펜션입니다. 풀빌라, 키즈, 스탠다드 타입별 객실.
            전객실 마운틴뷰 개별 바베큐 등 편의시설을 갖추고 있습니다.
          </p>
        </div>
      </div>
      <hr/>
      <h1>캠핑 유형</h1>
      <div className="camping-category">
        <div className="category-info">
          <img className="camping-category-icon" src="https://via.placeholder.com/40x40" alt="camping"/>
          <p>캠핑</p>
        </div>
      </div>
      <hr/>
      <h1>시설 정보</h1>
      <div className="facility-info">
        <h4>부대 시설</h4>
        <div className="amenities-info">
          <img className="amenities-category" src="https://via.placeholder.com/40x40" alt="shower"/>
          <p>샤워실</p>
        </div>
        <hr/>
        <h4>놀거리</h4>
        <div className="doing-info">
          <img className="doing-category" src="https://via.placeholder.com/40x40" alt="fishing"/>
          <p>낚시</p>
        </div>
        <hr/>
        <h4>주변 환경</h4>
        <div className="circumstance-info">
          <img className="circumstance-category" src="https://via.placeholder.com/40x40" alt="mountain"/>
          <p>산/숲</p>
        </div>
        <div className="manner-time">
          <p>매너타임</p>
          <p>22:00 - 07:00</p>
        </div>
      </div>
      <hr/>
      <div className="user-info">
        <b>입실일, 퇴실일</b><br/>
        <DatePicker
          selected={checkInTime}
          onChange={(time) => setCheckInTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          timeCaption="입실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
        <p> ~ </p>
        <DatePicker
          selected={checkOutTime}
          onChange={(time) => setCheckOutTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          timeCaption="퇴실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
        <br/>
        <b>인원 수</b>
        <div className="people-num">
          <label>성인</label>
          <select className="adult">
            {Array.from({ length: 11 }, (_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          <label> 유아</label>
          <select className="kid">
            {Array.from({ length: 11 }, (_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
        <button type="submit">확인</button>
      </div>
      <div className="site-type">
        <div className="site">
          <img className="site-img" src="https://via.placeholder.com/235x203" alt="site"/>
          <div className="site-info">
            <p className="site-category">펜션</p>
            <h3 className="site-name">마운틴 디럭스 온돌</h3>
            <p>입실시간: </p>
            <p className="checkin-time">15:00</p>
            <p>퇴실시간: </p>
            <p className="checkout-time">11:00</p>
            <p>최대</p>
            <p className="max-people">5인</p>
            <h3 className="site-price">150,000원</h3>
            <button className="site-status">예약</button>
          </div>
        </div>
      </div>
      <hr/>
      <div className="review-status">
        <div className="review">
          <img className="review-img" src="https://via.placeholder.com/168x98" alt="review"/>
          <p className="user-info">user1</p>
          <b className="review-title">좋아요</b>
          <p className="review-content">주변 공기도 좋고, 매너타임 시간도 맘에 듭니다.</p>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default DetailInformationPage;
