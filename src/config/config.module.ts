import {ConfigModule as NestConfigModule} from '@nestjs/config';
import {configValidationSchema} from './config.validation';

export const ConfigModule = NestConfigModule.forRoot({
  validationSchema: configValidationSchema,
  envFilePath: `.${process.env.NODE_ENV}.env`,
  isGlobal: true,
  validationOptions: {
    allowUnknown: true,
    abortEarly: false,
  },
});
