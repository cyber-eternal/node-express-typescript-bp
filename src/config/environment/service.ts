import config from 'config/environment/variables';
import { serviceSchema } from 'config/environment/schemas';

const { error, value: env } = serviceSchema.validate(config);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  projectName: env.PROJECT_NAME || 'my-project',
  env: env.NODE_ENV || 'development',
  port: env.PORT || 3000,
  baseApiUrl: env.BASE_API_URL || 'api/v1',
  database: {
    host: env.MYSQL_HOST || 'localhost',
    port: env.MYSQL_PORT || 3306,
    database: env.MYSQL_DATABASE || 'core',
    user: env.MYSQL_USER || 'root',
    password: env.MYSQL_PASSWORD || 'Password12!',
    charset: env.MYSQL_CHARSET || 'utf8mb4',
    collate: env.MYSQL_COLLATE || 'utf8mb4_unicode_ci',
    logging: env.MYSQL_LOGGING ? console.log : false, // eslint-disable-line no-console
  },
};
