import React, { useState } from 'react';
import './RegisterCampingPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RegisterCampingPage({ onAddCamping }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [number, setNumber] = useState('');
  const [mannertimestart, setMannerTimeStart] = useState(null);
  const [mannertimeend, setMannerTimeEnd] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [playings, setPlayings] = useState([]);
  const [surroundings, setSurroundings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCamping = {
      name,
      city,
      town,
      detailAddress,
      number,
      mannertimestart: mannertimestart ? mannertimestart.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '',
      mannertimeend: mannertimeend ? mannertimeend.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '',
      facilities: facilities.join(', '),
      playings: playings.join(', '),
      surroundings: surroundings.join(', ')
    };

    onAddCamping(newCamping);

    // Reset the form
    setName('');
    setCity('');
    setTown('');
    setDetailAddress('');
    setNumber('');
    setMannerTimeStart(null);
    setMannerTimeEnd(null);
    setFacilities([]);
    setPlayings([]);
    setSurroundings([]);
  };

  const handleCheckboxChange = (setter) => (event) => {
    const value = event.target.value;
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="container">
      <h1>캠핑장 등록</h1>

      <form onSubmit={handleSubmit}>
        <label>캠핑장 이름</label>
        <input
          className="camping-name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>캠핑장 주소</label>
        <div className="address-container">
          <select
            className="address-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">시/도</option>
            <option value="서울특별시">서울특별시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="세종특별자치시">세종특별자치시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도">전라남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="제주특별자치도">제주특별자치도</option>
          </select>
          <select
            className="address-input"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          >
            <option value="">시/군/구</option>
            <option value="구/군 1">구/군 1</option>
            <option value="구/군 2">구/군 2</option>
          </select>
          <input
            className="address-input"
            type="text"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
            placeholder="상세 주소"
          />
        </div>

        <label>캠핑장 전화번호</label>
        <input
          className="camping-phone-input"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label>매너 타임</label>
        <div className="manner-time-container">
          <DatePicker
            selected={mannertimestart}
            onChange={(time) => setMannerTimeStart(time)}
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
            selected={mannertimeend}
            onChange={(time) => setMannerTimeEnd(time)}
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
              <input
                type="checkbox"
                value="캠핑장"
                checked={facilities.includes('캠핑장')}
                onChange={handleCheckboxChange(setFacilities)}
              />
              <label>캠핑장</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="글램핑"
                checked={facilities.includes('글램핑')}
                onChange={handleCheckboxChange(setFacilities)}
              />
              <label>글램핑</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="카라반"
                checked={facilities.includes('카라반')}
                onChange={handleCheckboxChange(setFacilities)}
              />
              <label>카라반</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="펜션"
                checked={facilities.includes('펜션')}
                onChange={handleCheckboxChange(setFacilities)}
              />
              <label>펜션</label>
            </div>
          </div>
        </div>

        <div className="playing">
          <label>놀거리</label>
          <div className="checkbox-group">
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="낚시"
                checked={playings.includes('낚시')}
                onChange={handleCheckboxChange(setPlayings)}
              />
              <label>낚시</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="체험장"
                checked={playings.includes('체험장')}
                onChange={handleCheckboxChange(setPlayings)}
              />
              <label>체험장</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="수영장"
                checked={playings.includes('수영장')}
                onChange={handleCheckboxChange(setPlayings)}
              />
              <label>수영장</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="바베큐"
                checked={playings.includes('바베큐')}
                onChange={handleCheckboxChange(setPlayings)}
              />
              <label>바베큐</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="캠프파이어"
                checked={playings.includes('캠프파이어')}
                onChange={handleCheckboxChange(setPlayings)}
              />
              <label>캠프파이어</label>
            </div>
          </div>
        </div>

        <div className="environment">
          <label>주변 환경</label>
          <div className="checkbox-group">
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="산/숲"
                checked={surroundings.includes('산/숲')}
                onChange={handleCheckboxChange(setSurroundings)}
              />
              <label>산/숲</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="바다"
                checked={surroundings.includes('바다')}
                onChange={handleCheckboxChange(setSurroundings)}
              />
              <label>바다</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="강"
                checked={surroundings.includes('강')}
                onChange={handleCheckboxChange(setSurroundings)}
              />
              <label>강</label>
            </div>
          </div>
        </div>

        <button className="next-btn" type="submit">
          다음
        </button>
      </form>
    </div>
  );
}

export default RegisterCampingPage;
