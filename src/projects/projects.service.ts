import {Injectable, NotImplementedException, BadRequestException, InternalServerErrorException} from '@nestjs/common';
import {PlaylistsService} from '../playlists/playlists.service';
import {CreateEmptyProjectDto, ProjectId} from './dto/create-project';
import {FullProjectDto} from './dto/full-project';

@Injectable()
export class ProjectsService {
  constructor(private playlistsService: PlaylistsService) {}
  
  public async createEmptyProject(dto: CreateEmptyProjectDto) {
    throw new NotImplementedException();
  }
  
  public async createCopyOfExistingProject(data: {
    dto?: FullProjectDto,
    id?: ProjectId
  }) {
    if (data.id && !data.dto) {

    } else if (data.dto) {

    } else {
      throw new InternalServerErrorException();
    }
    throw new NotImplementedException();
  }
}
