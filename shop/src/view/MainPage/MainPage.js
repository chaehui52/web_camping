import React, { useState } from 'react';
import './MainPage.css';
import DatePicker from 'react-datepicker';

function MainPage() {
  const [checkInTime, setCheckInTime] = useState(null);
  return (
    <div className="container">
      <h1>메인페이지</h1>
      <div className="main-page">
        <form className="camp-name-info">
          <label className="camp-name">캠핑장 이름</label>
          <input className="camp-name-input" type="text" placeholder="캠핑장 이름을 입력하세요"/>
        </form>
        <div className="camping-address">
          <label>캠핑장 주소</label>
          <form className="address-sido">
            <select className="sido-select">
              <option>시/도</option>
            </select>
          </form>
          <form className="address-sigungu">
            <select className="sigungu-select">
              <option>시/군/구</option>
            </select>
          </form>
        </div>
        <div className="checkin-time">
          <label>입실 시간</label>
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
        </div>
        <p className="facilities">부대 시설</p>
        <div className="facility-type">
          <input className="camping" type="checkbox" value="캠핑장"/>
          <label htmlFor="camping">캠핑장</label>

          <input className="glamping" type="checkbox" value="글램핑"/>
          <label htmlFor="glamping">글램핑</label>

          <input className="caravan" type="checkbox" value="카라반"/>
          <label htmlFor="caravan">카라반</label>

          <input className="pension" type="checkbox" value="펜션"/>
          <label htmlFor="pension">펜션</label>
        </div>
        <form>
          <button className="search-btn" type="submit">검색</button>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
