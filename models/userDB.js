const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'assignDBuser',
  password: 'assignDBpass',
  database: 'assignDB',
})

function getUsers(callback) {
  setTimeout(function () {
    const sql = 'SELECT * FROM `users`';

    connection.query(sql, (err, rows, fields) => {
      if(err instanceof Error){
        console.log(err);
        return;
      }

      callback(rows);
    })
  }, 1000);
}

function addUser(user, callback) {
  setTimeout(function () {
    const sql = 'INSERT INTO `users`(`fname`,`lname`,`username`,`passwd`) VALUES (?, ?, ?, ?)';
    const values = [user.fname, user.lname, user.username, user.passwd];

    connection.query(sql, values, (err, result, fields) => {
      if(err instanceof Error){
        console.log(err);
        return;
      }

      callback(user);
    })
  }, 500);
}

module.exports = { getUsers, addUser };