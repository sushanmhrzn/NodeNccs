const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ 
  path: path.join(process.cwd(), '.env')
});
module.exports={
  "development": {
    "username": process.env.MYSQL_DB_USER,
    "password": null,
    "database": "tester",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "tester",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "tester",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
