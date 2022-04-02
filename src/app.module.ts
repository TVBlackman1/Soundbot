import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersModule} from './users/users.module';
import {User} from './users/users.model';
import {ConfigModule} from './config/config.module';
import {ConfigService} from '@nestjs/config';
import {ConfigFields} from './config/config.constants';
import {MusicTrackModule} from './music-track/music-track.module';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get(ConfigFields.POSTGRES_HOST),
        port: configService.get(ConfigFields.POSTGRES_PORT),
        username: configService.get(ConfigFields.POSTGRES_USER),
        password: configService.get(ConfigFields.POSTGRES_PASS),
        database: configService.get(ConfigFields.POSTGRES_DBNAME),
        models: [User,],
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService,],
    }),
    UsersModule,
    ConfigModule,
    MusicTrackModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
