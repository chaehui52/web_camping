import React from 'react';
import './SearchResultPage.css';
import { useLocation } from 'react-router-dom';

function SearchResultPage(props) {
  //const location = useLocation();
  //const { searchResults } = location.state || {};

  const {searchResults} = props;

  return (
    <div className="search-result-container">
      <h1>검색 결과</h1>
      {searchResults ? (
        searchResults.map((result, index) => (
          <div key={index} className="result">
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
