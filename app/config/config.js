module.exports = {
    development: {
      username: process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD,
      database: process.env.DEV_DB_NAME,
      host: process.env.DEV_DB_HOST,
      dialect: 'postgres',
      operatorsAliases: '0',
      logging: true,
      timezone: 'utc'
    },
    test: {
      username: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD,
      database: process.env.TEST_DB_NAME,
      host: process.env.TEST_DB_HOST,
      dialect: 'postgres',
      operatorsAliases: '0',
      logging: true,
      timezone: 'utc'
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres',
      operatorsAliases: '0',
      logging: false,
      timezone: 'utc'
    },
  };