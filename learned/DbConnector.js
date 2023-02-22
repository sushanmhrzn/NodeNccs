const mysql=require('mysql2')
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'bikeservicecenter'
});

connection.query(
    'Select * from supervisor',
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    }
)

connection.query(
    'SELECT * FROM bikeinfo',
    function(err, results) {
      console.log(results);
    }
  );