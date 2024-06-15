import logo from './logo.svg'; // 로고 이미지 가져오기
import './App.css'; // App 컴포넌트의 CSS 스타일 import

function MyPageAfter({
  ClientID,
  campName,
  city,
  town,
  detailAddress,
  adultCount,
  childCount,
  checkIn,
  checkOut,
  reviewState,
  reviewStateColor,
  imgSrc = "https://cdn.mediatoday.co.kr/news/photo/202311/313885_438531_4716.jpg"
  }) {
    return (
        <div
            style={{
                width: 960, // 전체 너비
                height: 540, // 전체 높이
                position: 'relative', // 위치 설정
                background: 'white' // 배경색 설정
            }}
        >
            {/* "마이 페이지" 제목 */}
            <div
                style={{
                    left: 30, // 왼쪽 위치
                    top: 31, // 위쪽 위치
                    position: 'absolute', // 절대 위치
                    color: 'black', // 글자색
                    fontSize: 30, // 글자 크기
                    fontFamily: 'Inter', // 글꼴
                    fontWeight: '400', // 글자 굵기
                    wordWrap: 'break-word' // 단어 줄바꿈
                }}
            >
                마이 페이지
            </div>

            {/* "예약 현황" 섹션 */}
            <div
                style={{
                    left: 30,
                    top: 110,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Inter',
                    fontWeight: '300',
                    wordWrap: 'break-word'
                }}
            >
                예약 현황
            </div>

            {/* "이용 전", "이용 후", "이용 취소" 라벨 */}
            <div
                style={{
                    left: 81,
                    top: 152,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}
            >
                이용 전
            </div>
            <div
                style={{
                    left: 243,
                    top: 150,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}
            >
                이용 후
            </div>
            <div
                style={{
                    left: 405,
                    top: 150,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}
            >
                이용 취소
            </div>
            {/* 이미지 */}
            <img
                className="Rectangle18"
                style={{
                    width: 168,
                    height: 98,
                    left: 39,
                    top: 194,
                    position: 'absolute'
                }}
                src={imgSrc} // 이미지 소스
            />

            {/* 팬션 정보 */}
            <div
                style={{
                    left: 230,
                    top: 194,
                    position: 'absolute',
                    color: '#646464',
                    fontSize: 10,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}
            >
                팬션
            </div>
            <div
                style={{
                    left: 230,
                    top: 237,
                    position: 'absolute',
                    color: '#646464',
                    fontSize: 10,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}
            >
               {` ${city} ${town} ${detailAddress}`}
            </div>

            {/* 입실일, 퇴실일 정보 */}
            <div
                className="20240603"
                style={{
                    left: 230,
                    top: 256,
                    position: 'absolute',
                    color: '#646464',
                    fontSize: 10,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}
            >
                {`입실일: ${checkIn}`}
            </div>
            <div
                className="31"
                style={{
                    left: 230,
                    top: 272,
                    position: 'absolute',
                    color: '#646464',
                    fontSize: 10,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}
            >
              {`인원: 성인${adultCount}인, ${childCount}인`}
            </div>
            <div
                className="20240604"
                style={{
                    left: 335,
                    top: 256,
                    position: 'absolute',
                    color: '#646464',
                    fontSize: 10,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}
            >
                {`퇴실일: ${checkOut}`}
            </div>

            {/* 팬션 제목 */}
            <div className="camping-name"
                style={{
                    left: 230,
                    top: 215,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}
            >
                {campName}
            </div>

            {/* 구분선 */}
            <div
                className="Line1"
                style={{
                    width: 634,
                    height: 0,
                    left: 30,
                    top: 308,
                    position: 'absolute',
                    border: '1px #C7C7C7 solid'
                }}
            ></div>
            <div
                className="Line3"
                style={{
                    width: 634,
                    height: 0,
                    left: 30,
                    top: 174,
                    position: 'absolute',
                    border: '1px #C7C7C7 solid'
                }}
            ></div>
            <div
                className="Line4"
                style={{
                    width: 29,
                    height: 0,
                    left: 185,
                    top: 176,
                    position: 'absolute',
                    transform: 'rotate(-90deg)',
                    transformOrigin: '0 0',
                    border: '1px #C7C7C7 solid'
                }}
            ></div>
            <div
                className="Line5"
                style={{
                    width: 29,
                    height: 0,
                    left: 356,
                    top: 174,
                    position: 'absolute',
                    transform: 'rotate(-90deg)',
                    transformOrigin: '0 0',
                    border: '1px #C7C7C7 solid'
                }}
            ></div>

            {/* 리뷰 작성 버튼 */}
            <div
                className="Rectangle33"
                style={{
                    width: 112,
                    height: 37,
                    left: 538,
                    top: 260,
                    position: 'absolute',
                    background: reviewStateColor,
                    borderRadius: 10
                }}
            ></div>
            <div
                className="writeReviewBtn"
                style={{
                    left: 554,
                    top: 266,
                    position: 'absolute',
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}
            >
                {`${reviewState}`}
            </div>

            {/* 사용자 이름 */}
            <div
                className="User"
                style={{
                    left: 31,
                    top: 71,
                    position: 'absolute',
                    color: '#B9B9B9',
                    fontSize: 20,
                    fontFamily: 'Inter',
                    fontWeight: '300',
                    wordWrap: 'break-word'
                }}
            >
                {`${ClientID}님의 마이페이지`}
            </div>
        </div>
              
    );
}

export default MyPageAfter;
