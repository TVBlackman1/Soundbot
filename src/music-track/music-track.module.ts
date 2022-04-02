import {Module} from '@nestjs/common';
import {MusicTrackController} from './music-track.controller';
import {MusicTrackService} from './music-track.service';
import {LocalMulterModule} from './multer.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {MusicTrack} from './music-track.model';

@Module({
  controllers: [MusicTrackController,],
  providers: [MusicTrackService,],
  imports: [SequelizeModule.forFeature([MusicTrack,]), LocalMulterModule,],
})
export class MusicTrackModule {}
