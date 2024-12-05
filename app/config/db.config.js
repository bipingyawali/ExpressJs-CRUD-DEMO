const config = require('./config.js');
const db = config[process.env.NODE_ENV ? process.env.NODE_ENV : 'development'];

module.exports = {
  HOST: db.host,
  USER: db.username,
  PASSWORD: db.password,
  DB: db.database,
  dialect: db.dialect,
  logging: db.logging,
  timezone: db.timezone,
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000
  }
};