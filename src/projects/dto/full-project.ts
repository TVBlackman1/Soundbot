import {FullPlaylist} from '../../playlists/dto/full-playlist';
import {HookDto} from './hook';
export type ProjectId = number;

export class FullProjectDto {
  id: ProjectId;
  name: string;
  playlists: FullPlaylist[];
  hookIds: HookDto[];
}