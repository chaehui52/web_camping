import React, { useState } from 'react';
import './RegisterCampingPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RegisterCampingPage() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return (
    <div className="container">
      <h1>캠핑장 등록</h1>

      <form>
        <label>캠핑장 이름</label>
        <input className='camping-name-input' type='text' placeholder='' />

        <label>캠핑장 주소</label>
        <div className="address-container">
          <select className='address-input'>
            <option value="">시/도</option>
            <option value="seoul">서울특별시</option>
            <option value="busan">부산광역시</option>
            <option value="daegu">대구광역시</option>
            <option value="incheon">인천광역시</option>
            <option value="gwangju">광주광역시</option>
            <option value="daejeon">대전광역시</option>
            <option value="ulsan">울산광역시</option>
            <option value="sejong">세종특별자치시</option>
            <option value="gyeonggi">경기도</option>
            <option value="gangwon">강원도</option>
            <option value="chungbuk">충청북도</option>
            <option value="chungnam">충청남도</option>
            <option value="jeonbuk">전라북도</option>
            <option value="jeonnam">전라남도</option>
            <option value="gyeongbuk">경상북도</option>
            <option value="gyeongnam">경상남도</option>
            <option value="jeju">제주특별자치도</option>
          </select>
          <select className='address-input'>
            <option value="">시/군/구</option>
            <option value="district1">구/군 1</option>
            <option value="district2">구/군 2</option>
          </select>
          <input className='address-input' type='text' placeholder='상세 주소' />
        </div>

        <label>캠핑장 전화번호</label>
        <input className='camping-phone-input' type='tel' placeholder='' />

        <label>매너 타임</label>
        <div className="manner-time-container">
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeCaption="시작 시간"
            dateFormat="h:mm aa"
            className="datePickerInput"
            placeholderText="시작 시간"
          />
          <span> ~ </span>
          <DatePicker
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeCaption="종료 시간"
            dateFormat="h:mm aa"
            className="datePickerInput"
            placeholderText="종료 시간"
          />
        </div>

        <label>시설 정보</label>
        <div className="facility-info">
          <label>부대시설</label>
          <div className="checkbox-group">
            <div className="checkbox-container">
              <input type='checkbox' value='camping' />
              <label>캠핑장</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='glamping' />
              <label>글램핑</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='caravan' />
              <label>카라반</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='pension' />
              <label>펜션</label>
            </div>
          </div>
        </div>

        <div className="playing">
          <div className="checkbox-group">
          <label>놀거리</label> 
            <div className="checkbox-container">
              <input type='checkbox' value='fishing' />
              <label>낚시</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='experience-center' />
              <label>체험장</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='pool' />
              <label>수영장</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='bbq' />
              <label>바베큐</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='camp-fire' />
              <label>캠프파이어</label>
            </div>
          </div>
        </div>

        <div className="environment">
          <div className="checkbox-group">
          <label>주변 환경</label> 
            <div className="checkbox-container">
              <input type='checkbox' value='mountain' />
              <label>산/숲</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='beach' />
              <label>바다</label>
            </div>
            <div className="checkbox-container">
              <input type='checkbox' value='river' />
              <label>강</label>
            </div>
          </div>
        </div>
        <button className='next-btn' type='submit'>다음</button>
      </form>
    </div>
  );
}

export default RegisterCampingPage;
