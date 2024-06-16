import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import './MainPage.css'; // CSS 파일 임포트

function MyTimePicker() {
  const [startTime, setStartTime] = useState('10:00'); // 시작 시간 초기값 설정: 10:00
  const [endTime, setEndTime] = useState('15:00'); // 종료 시간 초기값 설정: 15:00

  const handleStartTimeChange = (newTime) => {
    setStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setEndTime(newTime);
  };

  return (
    <div className="time-picker">
      <label>시작 시간 선택:</label>
      <TimePicker
        onChange={handleStartTimeChange}
        value={startTime}
        format="HH:mm"
        clearIcon={null} // x 버튼 제거
        className="custom-time-picker"
      />
      <br />
      <label>종료 시간 선택:</label>
      <TimePicker
        onChange={handleEndTimeChange}
        value={endTime}
        format="HH:mm"
        clearIcon={null} // x 버튼 제거
        className="custom-time-picker"
      />
    </div>
  );
}

export default MyTimePicker;
