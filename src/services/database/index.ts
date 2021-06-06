import { Sequelize } from 'sequelize';

import config from 'config/environment/service';

const { host, port, user, password, database, charset, collate, logging } = config.database;

export const databaseService = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mariadb',
  logging,
  define: {
    freezeTableName: true,
    charset,
    collate,
  },
});
