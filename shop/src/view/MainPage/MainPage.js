import React, { useState } from 'react';
import './MainPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MainPage() {
  const [selectedSido, setSelectedSido] = useState('');
  const [selectedSigungu, setSelectedSigungu] = useState('');
  const [checkInTime1, setCheckInTime1] = useState(null); // 첫 번째 입실 시간 상태
  const [checkInTime2, setCheckInTime2] = useState(null); // 두 번째 입실 시간 상태
  const [campName, setCampName] = useState(''); // 캠핑장 이름 상태
  const [facilities, setFacilities] = useState([]); // 선택된 부대 시설 상태

  const handleSidoChange = (e) => {
    setSelectedSido(e.target.value);
    setSelectedSigungu(''); // 시/도가 변경될 때 시/군/구 초기화
  };

  const handleSigunguChange = (e) => {
    setSelectedSigungu(e.target.value);
  };

  const handleCheckInTime1Change = (time) => {
    setCheckInTime1(time);
    if (checkInTime2 && time > checkInTime2) {
      setCheckInTime2(null); // 첫 번째 시간이 두 번째 시간보다 이후일 경우 두 번째 시간 초기화
    }
  };

  const handleCheckInTime2Change = (time) => {
    setCheckInTime2(time);
  };

  const calculateMinTimeForCheckInTime2 = () => {
    if (!checkInTime1) {
      return null;
    }
    return new Date(checkInTime1.getTime() + 60000); // 첫 번째 선택 시간 이후로 설정
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

    // 예를 들어, 여기서 서버로 데이터를 전송할 수 있습니다.
    const formData = {
      campName,
      facilities,
      selectedSido,
      selectedSigungu,
      checkInTime1,
      checkInTime2
    };

    console.log('전송할 데이터:', formData);

    // 실제로는 여기서 서버로 데이터를 전송하는 로직을 추가해야 합니다.
    // 예를 들어, fetch API를 사용하여 POST 요청을 보낼 수 있습니다.
    // fetch('/api/submit-data', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('서버 응답:', data);
    // })
    // .catch(error => {
    //   console.error('서버 요청 실패:', error);
    // });

    // 추가적인 검색 로직 구현
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
              <option value="경기도">경기도</option>
              {/* 다른 시/도 옵션들 추가 */}
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
                  <option value="송파구">송파구</option>
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
            maxTime={checkInTime1 ? new Date(checkInTime1.getTime() + 86400000) : null} // 첫 번째 선택 시간 이후 24시간 내로 설정
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
