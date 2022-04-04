import {Injectable} from '@nestjs/common';
import {ConfigService as NestConfigService} from '@nestjs/config';
import {ConfigFields} from './config.constants';

@Injectable()
export class GettersConfigService {
  constructor(private configService: NestConfigService) {}
  
  get PORT(): number {
    return this.configService.get<number>(ConfigFields.PORT);
  }
  get JWT_KEY(): string {
    return this.configService.get<string>(ConfigFields.JWT_KEY);
  }
  get NODE_ENV(): string {
    return this.configService.get<string>(ConfigFields.NODE_ENV);
  }
  get POSTGRES_HOST(): string {
    return this.configService.get<string>(ConfigFields.POSTGRES_HOST);
  }
  get POSTGRES_PORT(): number {
    return this.configService.get<number>(ConfigFields.POSTGRES_PORT);
  }
  get POSTGRES_USER(): string {
    return this.configService.get<string>(ConfigFields.POSTGRES_USER);
  }
  get POSTGRES_PASS(): string {
    return this.configService.get<string>(ConfigFields.POSTGRES_PASS);
  }
  get POSTGRES_DBNAME(): string {
    return this.configService.get<string>(ConfigFields.POSTGRES_DBNAME);
  }
}