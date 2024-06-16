"use strict";

const mysql = require('./config.js');

const review = {
    reviewBefore: async function () {
        try {
            // const [result] = await mysql.query("SELECT p.Title, p.Content, p.Like, p.Category, u.Nickname COUNT(*) AS CommentCount FROM Comment c JOIN Post p ON c.PostId = p.PostId;FROM Post p JOIN USER u ON p.USERId = u.USERId;");
            const [result] = await mysql.query("SELECT p.Title, p.Content, p.Like, p.Category, u.Nickname, COUNT(c.CommentId) AS CommentCount FROM Post p JOIN USER u ON p.USERId = u.USERId LEFT JOIN Comment c ON p.PostId = c.PostId GROUP BY p.PostId, p.Title, p.Content, p.Like, p.Category, u.Nickname ORDER BY p.PostId DESC;");
            return result;
        } catch (err) {
            console.log("post: 전체 조회 모델 오류 발생");
        }
    },
}

module.exports = review;