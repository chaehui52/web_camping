const mysql = require('./src/server');

const pool = mysql.createPool({
    host: 'db.meowning.kr',
    port: 3306,
    user: 'camping',
    password: 'camping',
    database: 'WEB_CAMPING',
    connectionLimit: 10,
    multipleStatements: true,
    timezone: '+09:00'
});

pool.getConnection()
    .then(connection => {
        console.log('MySQL 데이터베이스에 연결되었습니다.');
        connection.release();
    })
    .catch(error => {
        console.error('MySQL 데이터베이스 연결 오류:', error);
    });

module.exports = pool;
