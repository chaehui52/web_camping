"use strict";

const mysql = require('./config.js');

const camp = {
    searchCamping: async function (campName) {
        try {
            const [result] = await mysql.query("SELECT * FROM campGround WHERE campName = ?;", [campName]);
            return result;
        } catch (err) {
            console.log("post: 전체 조회 모델 오류 발생");
        }
    }
}

module.exports = camp;