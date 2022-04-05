import {Injectable, NotImplementedException} from '@nestjs/common';
import {PlaylistsService} from '../playlists/playlists.service';

@Injectable()
export class ProjectsService {
  constructor(private playlistsService: PlaylistsService) {}
  
  public async createProject() {
    throw new NotImplementedException();
  }
  
  public async addNamedPlaylist() {
    throw new NotImplementedException();
  }
}
