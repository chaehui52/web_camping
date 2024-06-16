// src/view/MainPage/MainPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data"); // Express 서버의 API 엔드포인트
      setData(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      <p>Data from server: {data}</p>
    </div>
  );
}

export default Test;
