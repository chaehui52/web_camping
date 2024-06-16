import React, { useState } from 'react';
import './MyPage.css';

function MyPageAfter({ ClientID, reservations }) {
  const [filter, setFilter] = useState('이용 전');

  const filteredReservations = reservations.filter(reservation => reservation.status === filter);

  return (
    <div className="container">
      <h1>마이 페이지</h1>
      <p className="user-name">{`${ClientID}님의 마이페이지`}</p>
      <p className="reservation-status">예약 현황</p>
      <div className="filters">
        <div className={`filter ${filter === '이용 전' ? 'active' : ''}`} onClick={() => setFilter('이용 전')}>이용 전</div>
        <div className={`filter ${filter === '이용 후' ? 'active' : ''}`} onClick={() => setFilter('이용 후')}>이용 후</div>
        <div className={`filter ${filter === '이용 취소' ? 'active' : ''}`} onClick={() => setFilter('이용 취소')}>이용 취소</div>
      </div>
      {filteredReservations.map((reservation, index) => (
        <div key={index} className="reservation-card">
          <img className="camping-image" src={reservation.imgSrc} alt="캠핑 이미지" />
          <div className="reservation-info">
            <div className="pension-info">{reservation.type}</div>
            <div className="camping-name">{reservation.campName}</div>
            <div className="address">{`${reservation.city} ${reservation.town} ${reservation.detailAddress}`}</div>
            <div className="check-in">{`입실일: ${reservation.checkIn}`}</div>
            <div className="check-out">{`퇴실일: ${reservation.checkOut}`}</div>
            <div className="person-count">{`인원: 성인 ${reservation.adultCount}인, 유아 ${reservation.childCount}인`}</div>
          </div>
          <div className={`reservation-status ${reservation.statusColor}`}>
            {reservation.statusText}
          </div>
          <button className="cancel-button">취소</button>
        </div>
      ))}
    </div>
  );
}

export default MyPageAfter;
