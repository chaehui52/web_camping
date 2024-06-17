import React, { useState } from 'react';
import './MainPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Axios 라이브러리 추가
import { useNavigate } from 'react-router-dom'

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:4000', // baseURL 설정
  timeout: 10000, // 요청 타임아웃 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
    // 기타 필요한 헤더 설정
  }
});

function MainPage() {
  const [selectedSido, setSelectedSido] = useState('');
  const [selectedSigungu, setSelectedSigungu] = useState('');
  const [checkInTime1, setCheckInTime1] = useState(null);
  const [checkInTime2, setCheckInTime2] = useState(null);
  const [campName, setCampName] = useState('');
  const [facilities, setFacilities] = useState([]);

  const handleSidoChange = (e) => {
    setSelectedSido(e.target.value);
    setSelectedSigungu('');
  };

  const handleSigunguChange = (e) => {
    setSelectedSigungu(e.target.value);
  };

  const handleCheckInTime1Change = (time) => {
    setCheckInTime1(time);
    if (checkInTime2 && time > checkInTime2) {
      setCheckInTime2(null);
    }
  };

  const handleCheckInTime2Change = (time) => {
    setCheckInTime2(time);
  };

  const calculateMinTimeForCheckInTime2 = () => {
    if (!checkInTime1) {
      return null;
    }
    return new Date(checkInTime1.getTime() + 60000);
  };

  const handleFacilityChange = (e) => {
    const facility = e.target.value;
    if (facilities.includes(facility)) {
      setFacilities(facilities.filter(item => item !== facility));
    } else {
      setFacilities([...facilities, facility]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      campName,
      selectedSido,
      selectedSigungu,
      checkInTime1: checkInTime1 ? checkInTime1.toISOString() : '',
      checkInTime2: checkInTime2 ? checkInTime2.toISOString() : '',
      facilities
    };

    api.post('/camp/search', formData)
      .then(response => {
        console.log('서버 응답:', response.data);
        // 서버 응답에 따라 추가적인 로직을 처리할 수 있습니다.
      })
      .catch(error => {
        console.error('서버 요청 실패:', error);
        // 에러 처리 로직을 추가할 수 있습니다.
      });
  };
  

  return (
    <div className="container">
      <h1>메인페이지</h1>
      <div className="main-page">
        <form className="camp-name-info">
          <label className="camp-name">캠핑장 이름</label>
          <input
            className="camp-name-input"
            type="text"
            placeholder="캠핑장 이름을 입력하세요"
            value={campName}
            onChange={(e) => setCampName(e.target.value)}
          />
        </form>
        <div className="camping-address">
          <label>캠핑장 주소</label>
          <form className="address-sido">
            <select
              className="sido-select"
              value={selectedSido}
              onChange={handleSidoChange}
            >
              <option value="">시/도</option>
              <option value="서울특별시">서울특별시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="울산광역시">울산광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="대전광역시">대전광역시</option>
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
          </form>
          <form className="address-sigungu">
            <select
              className="sigungu-select"
              value={selectedSigungu}
              onChange={handleSigunguChange}
            >
              <option value="">시/군/구</option>
              {selectedSido === '서울특별시' && (
                <>
                  <option value="강남구">강남구</option>
                  <option value="강동구">강남구</option>
                  <option value="강북구">강북구</option>
                  <option value="강서구">강서구</option>
                  <option value="관악구">관악구</option>
                  <option value="광진구">광진구</option>
                  <option value="구로구">구로구</option>
                  <option value="금천구">금천구</option>
                  <option value="노원구">노원구</option>
                  <option value="도봉구">도봉구</option>
                  <option value="동대문구">동대문구</option>
                  <option value="동작구">동작구</option>
                  <option value="마포구">마포구</option>
                  <option value="서대문구">서대문구</option>
                  <option value="서초구">서초구</option>
                  <option value="성동구">성동구</option>
                  <option value="성북구">성북구</option>
                  <option value="송파구">송파구</option>
                  <option value="양천구">양천구</option>
                  <option value="영등포구">영등포구</option>
                  <option value="용산구">용산구</option>
                  <option value="은평구">은평구</option>
                  <option value="종로구">종로구</option>
                  <option value="중구">중구</option>
                  <option value="중랑구">중랑구</option>
                </>
              )}
              {selectedSido === '부산광역시' && (
                <>
                  <option value="수원시">수원시</option>
                  <option value="용인시">용인시</option>
                </>
              )}
              {selectedSido === '경기도' && (
                <>
                  <option value="수원시">수원시</option>
                  <option value="용인시">용인시</option>
                </>
              )}
              {selectedSido === '경기도' && (
                <>
                  <option value="수원시">수원시</option>
                  <option value="용인시">용인시</option>
                </>
              )}
              {selectedSido === '경기도' && (
                <>
                  <option value="수원시">수원시</option>
                  <option value="용인시">용인시</option>
                </>
              )}
              {/* 다른 시/군/구 옵션들 추가 */}
            </select>
          </form>
        </div>
        <div className="checkin-time">
          <label>입실 시간 1</label>
          <DatePicker
            selected={checkInTime1}
            onChange={handleCheckInTime1Change}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeCaption="입실 시간 1"
            dateFormat="h:mm aa"
            className="datePickerInput"
          />
          <label>입실 시간 2</label>
          <DatePicker
            selected={checkInTime2}
            onChange={handleCheckInTime2Change}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeCaption="입실 시간 2"
            minTime={calculateMinTimeForCheckInTime2()}
            maxTime={checkInTime1 ? new Date(checkInTime1.getTime() + 86400000) : null}
            dateFormat="h:mm aa"
            className="datePickerInput"
          />
        </div>
        <p className="facilities">부대 시설</p>
        <div className="facility-type">
          <input
            className="camping"
            type="checkbox"
            value="캠핑장"
            checked={facilities.includes('캠핑장')}
            onChange={handleFacilityChange}
          />
          <label htmlFor="camping">캠핑장</label>

          <input
            className="glamping"
            type="checkbox"
            value="글램핑"
            checked={facilities.includes('글램핑')}
            onChange={handleFacilityChange}
          />
          <label htmlFor="glamping">글램핑</label>

          <input
            className="caravan"
            type="checkbox"
            value="카라반"
            checked={facilities.includes('카라반')}
            onChange={handleFacilityChange}
          />
          <label htmlFor="caravan">카라반</label>

          <input
            className="pension"
            type="checkbox"
            value="펜션"
            checked={facilities.includes('펜션')}
            onChange={handleFacilityChange}
          />
          <label htmlFor="pension">펜션</label>
        </div>
        <form onSubmit={handleSubmit}>
          <button className="search-btn" type="submit">검색</button>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
