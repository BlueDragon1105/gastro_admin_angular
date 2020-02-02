import mysql from 'mysql';

let user, password;
if(process.env.NODE_ENV === 'development') {
  user = 'root';
  password = '';
} else {
  user = process.env.DB_USER;
  password = process.env.DB_PASSWORD;
}

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : user,
  password : password,
  database : process.env.DB_NAME,
  port: 3306
});

connection.connect((err) => {
  if(err) {
    console.log('err???', err);
  }
});


export default connection;
