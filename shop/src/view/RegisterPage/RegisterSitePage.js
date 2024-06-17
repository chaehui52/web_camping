import React, { useState } from 'react';
import './RegisterSitePage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RegisterSitePage() {
  const [preview, setPreview] = useState(null);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [siteName, setSiteName] = useState('');
  const [sitePrice, setSitePrice] = useState('');
  const [facility, setFacility] = useState({
    camping: false,
    glamping: false,
    caravan: false,
    pension: false,
  });
  const [registerSites, setRegisterSites] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    const newSite = {
      name: siteName,
      checkInTime: checkInTime ? checkInTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '',
      checkOutTime: checkOutTime ? checkOutTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '',
      type: Object.keys(facility).filter(key => facility[key]).join(', '),
      price: `${sitePrice}원`,
      imgSrc: preview
    };

    setRegisterSites([...registerSites, newSite]);
  };

  return (
    <div className="registerSiteContainer">
      <h1>사이트 등록</h1>
      <div className="siteNameLabel">사이트 이름</div>
      <div className="siteNameInput">
        <input
          type="text"
          className="textInput"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />
      </div>
      <div className="photoUploadLabel">사진 등록</div>
      <div className="photoPreview">
        {preview ? (
          <img src={preview} alt="미리보기" className="imagePreview" />
        ) : (
          <input type="file" className="fileInput" onChange={handleFileChange} />
        )}
      </div>
      <div className="siteNameLabel2">사이트 가격</div>
      <div className="sitePriceLabel">원</div>
      <div className="siteNameInput2">
        <input
          type="text"
          className="textInput"
          value={sitePrice}
          onChange={(e) => setSitePrice(e.target.value)}
        />
      </div>
      <div className="checkInTimeLabel">사이트 입퇴실 시간</div>
      <div className="checkInTimeFrom">
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
      <div className="checkInTimeTo">
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
      </div>
      <div className="facilityInfoLabel">시설 정보</div>
      <div className="facilityCampingLabel">캠핑장</div>
      <div className="facilityCampingCheckbox">
        <input
          type="checkbox"
          className="checkboxInput"
          checked={facility.camping}
          onChange={(e) => setFacility({ ...facility, camping: e.target.checked })}
        />
      </div>
      <div className="facilityGlampingLabel">글램핑</div>
      <div className="facilityGlampingCheckbox">
        <input
          type="checkbox"
          className="checkboxInput"
          checked={facility.glamping}
          onChange={(e) => setFacility({ ...facility, glamping: e.target.checked })}
        />
      </div>
      <div className="facilityCaravanLabel">카라반</div>
      <div className="facilityCaravanCheckbox">
        <input
          type="checkbox"
          className="checkboxInput"
          checked={facility.caravan}
          onChange={(e) => setFacility({ ...facility, caravan: e.target.checked })}
        />
      </div>
      <div className="facilityPensionLabel">펜션</div>
      <div className="facilityPensionCheckbox">
        <input
          type="checkbox"
          className="checkboxInput"
          checked={facility.pension}
          onChange={(e) => setFacility({ ...facility, pension: e.target.checked })}
        />
      </div>
      <div className="nextButton" onClick={handleNext}>
        <div className="buttonText">다음</div>
      </div>
      {/* Register sites preview */}
    </div>
  );
}

export default RegisterSitePage;
