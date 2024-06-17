// SearchResultPage.js
import React from 'react';
import './SearchResultPage.css';
import { useNavigate } from 'react-router-dom';

function SearchResultPage({ searchResults }) {
  const navigate = useNavigate();

  const handleResultClick = (groundID) => {
    console.log(`Selected groundID: ${groundID}`);
    navigate(`/detail/${groundID}`);
  };

  return (
    <div className="search-result-container">
      <h1>검색 결과</h1>
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <div 
            key={index} 
            className="result"
            onClick={() => handleResultClick(result.groundID)}
          >
            <img className="image" src={result.imgSrc} alt={result.name} />
            <div className="info">
              <p className="type">{result.type}</p>
              <h2 className="name">{result.name}</h2>
              <p className="address">{result.address}</p>
              <p className="price">{result.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchResultPage;
