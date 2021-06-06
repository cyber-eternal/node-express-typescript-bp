import config from 'config/environment/service';

const { database } = config;

module.exports = {
  development: {
    host: database.host,
    port: database.port,
    username: database.user,
    password: database.password,
    database: database.database,
    dialect: 'mysql',
    logging: database.logging,
    dialectOptions: {
      multipleStatements: true,
    },
    seederStorage: 'sequelize',
  },
  staging: {
    host: database.host,
    port: database.port,
    username: database.user,
    password: database.password,
    database: database.database,
    dialect: 'mysql',
    logging: database.logging,
    dialectOptions: {
      multipleStatements: true,
    },
    seederStorage: 'sequelize',
  },
  production: {
    host: database.host,
    port: database.port,
    username: database.user,
    password: database.password,
    database: database.database,
    dialect: 'mysql',
    logging: database.logging,
    dialectOptions: {
      multipleStatements: true,
    },
    seederStorage: 'sequelize',
  },
};
