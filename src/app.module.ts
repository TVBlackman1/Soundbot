import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersModule} from './users/users.module';
import {User} from './users/users.model';
import {ConfigModule} from './config/config.module';
import {MusicTrackModule} from './music-track/music-track.module';
import {GettersConfigService} from './config/config.service';
import {ProjectsModule} from './projects/projects.module';
import {PlaylistsModule} from './playlists/playlists.module';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      useFactory: async (configService: GettersConfigService) => ({
        dialect: 'postgres',
        host: configService.POSTGRES_HOST,
        port: configService.POSTGRES_PORT,
        username: configService.POSTGRES_USER,
        password: configService.POSTGRES_PASS,
        database: configService.POSTGRES_DBNAME,
        models: [User,],
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [GettersConfigService,],
    }),
    UsersModule,
    ConfigModule,
    MusicTrackModule,
    ProjectsModule,
    PlaylistsModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
