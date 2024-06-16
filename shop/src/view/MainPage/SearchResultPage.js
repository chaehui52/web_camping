import React from 'react';
import './SearchResultPage.css';

function SearchResultPage({ results }) {
  return (
    <div className="search-result-container">
      <h1>검색 결과</h1>
      {results.map((result, index) => (
        <div key={index} className="result">
          <img className="image" src={result.imgSrc} alt={result.name} />
          <div className="info">
            <p className="type">{result.type}</p>
            <h2 className="name">{result.name}</h2>
            <p className="address">{result.address}</p>
            <p className="price">{result.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultPage;
