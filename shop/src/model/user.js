"use strict";

const mysql = require('./config.js');

const user = {
    login: async function (id, pw) {
        try {   // TRUE : 로그인 성공, FALSE : 로그인 실패
            const [result] = await mysql.query("SELECT IF(COUNT(*) = 0, 'false', 'true') AS result FROM USER WHERE USERId = ? AND Password = ?", [id, pw]);
            console.log("로그인 조회 성공 : " + result)
            return result;
        } catch (error) {
            console.log("user: login 조회 오류 발생");
        }
    }
}

module.exports = user;