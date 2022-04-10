import {Module} from '@nestjs/common';
import {ProjectsController} from './projects.controller';
import {ProjectsService} from './projects.service';
import {PlaylistsService} from '../playlists/playlists.service';

@Module({
  controllers: [ProjectsController,],
  providers: [ProjectsService, PlaylistsService,],
  exports: [ProjectsService,],
})
export class ProjectsModule {}
