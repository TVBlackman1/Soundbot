import {Module} from '@nestjs/common';
import {MusicTrackController} from './music-track.controller';
import {MusicTrackService} from './music-track.service';
import {LocalMulterModule} from './multer.module';

@Module({
  controllers: [MusicTrackController,],
  providers: [MusicTrackService,],
  imports: [LocalMulterModule,],
})
export class MusicTrackModule {}
