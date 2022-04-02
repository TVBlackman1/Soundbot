import * as Joi from 'joi';
import {Environment} from './config.constants';
import {ConfigFields} from './config.constants';

export const configValidationSchema = Joi.object({
  [ConfigFields.PORT]: Joi.number().default(3000),
  [ConfigFields.SECRET_KEY]: Joi.string().default('SECRET_KEY'),
  [ConfigFields.POSTGRES_HOST]: Joi.string().default('localhost'),
  [ConfigFields.POSTGRES_PORT]: Joi.number().default(5432),
  [ConfigFields.POSTGRES_USER]: Joi.string().default('postgres'),
  [ConfigFields.POSTGRES_PASS]: Joi.string().default('postgres'),
  [ConfigFields.POSTGRES_DBNAME]: Joi.string().default('postgres'),
  [ConfigFields.NODE_ENV]: Joi.string()
    .valid(...Object.values(Environment))
    .default(Environment.DEVELOPMENT),
  
});