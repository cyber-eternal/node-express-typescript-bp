/* eslint-disable @typescript-eslint/naming-convention */
import Joi from 'joi';

import { defaultSchema } from 'config/environment/schemas';

export const serviceSchema = defaultSchema.append({
  NODE_ENV: Joi.string().valid('test', 'development', 'production').default('development'),
  PORT: Joi.number().default(3000),
  BASE_API_URL: Joi.string().default(''),
  MYSQL_HOST: Joi.string().default('localhost'),
  MYSQL_PORT: Joi.number().default(3306),
  MYSQL_DATABASE: Joi.string(),
  MYSQL_USER: Joi.string(),
  MYSQL_PASSWORD: Joi.string(),
  MYSQL_ROOT_PASSWORD: Joi.string(),
  MYSQL_CHARSET: Joi.string().default('utf8mb4'),
  MYSQL_COLLATE: Joi.string().default('utf8mb4_unicode_ci'),
  MYSQL_LOGGING: Joi.boolean().default(true),
});
