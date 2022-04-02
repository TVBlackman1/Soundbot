import * as Joi from 'joi';
import {Environment} from '../constants/environment.enum';


export const configValidationSchema = Joi.object({
    PORT: Joi.number().default(3000),
    SECRET_KEY: Joi.string().default('SECRET_KEY'),
    NODE_ENV: Joi.string()
        .valid(...Object.values(Environment))
        .default(Environment.DEVELOPMENT),

});