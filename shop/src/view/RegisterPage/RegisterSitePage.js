import React, { useState } from 'react';
import './RegisterPage/RegisterSitePage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RegisterSitePage() {
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [checkInTime1, setCheckInTime1] = useState(null);
  const [checkOutTime1, setCheckOutTime1] = useState(null);
  const [checkInTime2, setCheckInTime2] = useState(null);
  const [checkOutTime2, setCheckOutTime2] = useState(null);

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="registerSiteContainer">
      <h1>사이트 등록</h1>
      <div className="siteNameLabel">사이트1 이름</div>
      <div className="siteNameInput">
        <input type="text" className="textInput" />
      </div>
      <div className="siteNameLabel3">사이트2 이름</div>
      <div className="siteNameInput3">
        <input type="text" className="textInput" />
      </div>
      <div className="noticeText">캠핑장 등록시 사이트를 최소 2개 이상 등록해야 합니다.</div>
      <div className="photoUploadLabel">사진 등록</div>
      <div className="photoPreview">
        {preview1 ? (
          <img src={preview1} alt="미리보기" className="imagePreview" />
        ) : (
          <input type="file" className="fileInput" onChange={handleFileChange1} />
        )}
      </div>
      <div className="photoUploadLabel2">사진 등록</div>
      <div className="photoPreview2">
        {preview2 ? (
          <img src={preview2} alt="미리보기" className="imagePreview" />
        ) : (
          <input type="file" className="fileInput" onChange={handleFileChange2} />
        )}
      </div>
      <div className="siteNameLabel2">사이트1 가격</div>
      <div className="sitePriceLabel">원</div>
      <div className="siteNameInput2">
        <input type="text" className="textInput" />
      </div>
      <div className="siteNameLabel4">사이트2 가격</div>
      <div className="sitePriceLabel2">원</div>
      <div className="siteNameInput4">
        <input type="text" className="textInput" />
      </div>
      <div className="checkInTimeLabel">사이트1 입퇴실 시간</div>
      <div className="checkInTimeFrom">
        <DatePicker
          selected={checkInTime1}
          onChange={(time) => setCheckInTime1(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="입실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
      </div>
      <div className="checkInTimeTo">
        <DatePicker
          selected={checkOutTime1}
          onChange={(time) => setCheckOutTime1(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="퇴실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
      </div>
      <div className="checkInTimeLabel2">사이트2 입퇴실 시간</div>
      <div className="checkInTimeFrom2">
        <DatePicker
          selected={checkInTime2}
          onChange={(time) => setCheckInTime2(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="입실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
      </div>
      <div className="checkInTimeTo2">
        <DatePicker
          selected={checkOutTime2}
          onChange={(time) => setCheckOutTime2(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="퇴실 시간"
          dateFormat="h:mm aa"
          className="datePickerInput"
        />
      </div>
      <div className="facilityInfoLabel">시설 정보</div>
      <div className="facilityCampingLabel">캠핑장</div>
      <div className="facilityCampingCheckbox">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityGlampingLabel">글램핑</div>
      <div className="facilityGlampingCheckbox">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityCaravanLabel">카라반</div>
      <div className="facilityCaravanCheckbox">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityPensionLabel">펜션</div>
      <div className="facilityPensionCheckbox">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityInfoLabel2">시설 정보</div>
      <div className="facilityCampingLabel2">캠핑장</div>
      <div className="facilityCampingCheckbox2">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityGlampingLabel2">글램핑</div>
      <div className="facilityGlampingCheckbox2">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityCaravanLabel2">카라반</div>
      <div className="facilityCaravanCheckbox2">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="facilityPensionLabel2">펜션</div>
      <div className="facilityPensionCheckbox2">
        <input type="checkbox" className="checkboxInput" />
      </div>
      <div className="nextButton">
        <div className="buttonText">다음</div>
      </div>
    </div>
  );
}

export default RegisterSitePage;
