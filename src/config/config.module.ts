import {ConfigModule as NestConfigModule} from '@nestjs/config';
import {configValidationSchema} from './config.validation';
import {GettersConfigService} from './config.service';

export const ConfigModule = NestConfigModule.forRoot({
  validationSchema: configValidationSchema,
  envFilePath: `.${process.env.NODE_ENV}.env`,
  isGlobal: true,
  validationOptions: {
    allowUnknown: true,
    abortEarly: false,
  },
  cache: true,
});
ConfigModule.providers.push(GettersConfigService);
ConfigModule.exports.push(GettersConfigService);