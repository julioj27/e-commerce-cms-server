if(process.env.NODE_ENV ==='development' || process.env.NODE_ENV ==='test') {
  require('dotenv').config()
}

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DEV_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_TEST_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "12345678!",
    "database": "database_production",
    "host": "localhost",
    "dialect": "postgres"
  }
}