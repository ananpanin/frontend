export default function handler(req, res) {
  const { id } = req.query
  const mysql = require('mysql2');
  
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });
  
  connection.query(
    'SELECT * FROM tbl_users WHERE id = ?',[id],
    function(err, results, fields) {
      console.log(results);
      res.status(200).json({user: results});
    }
  );
  }