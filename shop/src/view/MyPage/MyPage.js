import React, { useState, useEffect } from 'react';
import './MyPage.css';
import { useNavigate } from 'react-router-dom';

function MyPageAfter({ ClientID, reservations }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('이용 전');
  const [reservationsState, setReservationsState] = useState(reservations || []); // 예약 정보 상태를 useState로 관리

  useEffect(() => {
    setReservationsState(reservations || []);
  }, [reservations]);

  // 예약 상태에 따른 색상과 텍스트를 반환하는 함수
  const getStatusProps = (reservation) => {
    const today = new Date();  // 현재 날짜
    const checkInDate = new Date(reservation.checkIn);  // 입실 날짜

    if (reservation.status === '이용 취소') {
      return { statusColor: 'cancelled', statusText: '이용 취소' };
    } else if (checkInDate > today) {
      return { statusColor: 'upcoming', statusText: '예약 대기' };  // 입실 날짜가 오늘 이후이면 '예약 대기'
    } else {
      return { statusColor: 'used', statusText: '' };  // 입실 날짜가 오늘 이전이거나 오늘인 경우 상태 텍스트를 비움
    }
  };

  // 예약 취소 처리 함수
  const handleCancelReservation = (index) => {
    const updatedReservations = [...reservationsState]; // 예약 배열을 복제하여 안전하게 수정합니다.
    updatedReservations[index].status = '이용 취소';
    setReservationsState(updatedReservations);
  };

  const handleWriteReviewClick = () => {
    navigate('/review-check'); // WriteReviewPage 경로로 이동
  };

  // 선택된 필터에 따라 예약 정보를 필터링하는 로직
  const filteredReservations = reservationsState.filter(reservation => {
    if (filter === '이용 전') {
      return reservation.status !== '이용 취소' && new Date(reservation.checkIn) > new Date();
    } else if (filter === '이용 후') {
      return reservation.status === '이용 후' && !reservation.reviewWritten;
    } else if (filter === '이용 취소') {
      return reservation.status === '이용 취소';
    }
    return true;
  });

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
      {filteredReservations.map((reservation, index) => {
        const { statusColor, statusText } = getStatusProps(reservation);

        return (
          <div key={index} className={`reservation-card ${statusColor}`}>
            <img className="camping-image" src={reservation.imgSrc} alt="캠핑 이미지" />
            <div className="reservation-info">
              <div className="pension-info">{reservation.type}</div>
              <div className="camping-name">{reservation.campName}</div>
              <div className="address">{`${reservation.city} ${reservation.town} ${reservation.detailAddress}`}</div>
              <div className="check-in">{`입실일: ${reservation.checkIn}`}</div>
              <div className="check-out">{`퇴실일: ${reservation.checkOut}`}</div>
              <div className="person-count">{`인원: 성인 ${reservation.adultCount}인, 유아 ${reservation.childCount}인`}</div>
            </div>
            {statusText && ( // 상태 텍스트가 있는 경우에만 표시
              <div className={`reservation-status ${statusColor}`}>
                {statusText}
              </div>
            )}
            {reservation.status === '이용 전' && ( // '이용 전' 상태일 때만 취소 버튼 표시
              <button className="cancel-button" onClick={() => handleCancelReservation(index)}>취소</button>
            )}

            {reservation.status === '이용 후' && (
              <>
                {reservation.reviewWritten ? (
                  <button className="complete-button" disabled>
                    작성 완료
                  </button>
                ) : (
                  <button className="write-button" onClick={handleWriteReviewClick}>
                    리뷰 작성
                  </button>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyPageAfter;
