import React, { useState, useEffect } from 'react';
import './SearchResultPage.css';
import { useNavigate } from 'react-router-dom';

function SearchResultPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    } else {
      // 예시를 위해 setTimeout을 사용하여 가짜 데이터를 설정합니다.
      setTimeout(() => {
        const fakeData = [
          {
            ManagerID: "1",
            campIntroduction: "1",
            campName: "aasdfsadf",
            campPhone: "123213",
            city: "1asdfs",
            detailAddress: "1asdfsadf",
            groundID: 1,
            isCamping: 1,
            isCaravan: 1,
            isGlamping: 1,
            isPension: 1,
            mannerFinish: "2024-06-12T15:00:00.000Z",
            mannerStart: "2024-06-04T15:00:00.000Z",
            picUrl: "1",
            reviewID: null,
            town: "asdfasd"
          }
          // 추가적인 가짜 데이터들...
        ];

        setSearchResults(fakeData); // 가짜 데이터를 상태에 설정합니다.
      }, 1000); // 가짜 데이터가 1초 후에 설정됩니다.
    }
  }, [location.state]);

  return (
    <div className="search-result-container">
      <h1>검색 결과</h1>
      {searchResults.length > 0 ? (
        <ul className="results-list">
          {searchResults.map((result, index) => (
            <li key={index} className="result">
              <img className="image" src={result.picUrl} alt={result.campName} />
              <div className="info">
                <p className="type">
                  {result.isCamping === 1 ? '캠핑장' : ''}
                  {result.isGlamping === 1 ? '글램핑' : ''}
                  {result.isCaravan === 1 ? '카라반' : ''}
                  {result.isPension === 1 ? '펜션' : ''}
                </p>
                <h2 className="name">{result.campName}</h2>
                <p className="address">
                  {result.city} {result.town} {result.detailAddress}
                </p>
                <p className="phone">전화번호: {result.campPhone}</p>
                <p className="manner">
                  예약 가능 기간: {result.mannerStart} ~ {result.mannerFinish}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchResultPage;
