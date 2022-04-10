import {FullPlaylist} from '../../playlists/dto/full-playlist';
import {ProjectId} from './full-project';
export type HookId = number;

export class HookDto {
  id: HookId;
  projectId: ProjectId;
  name: string;
  playlists: FullPlaylist;
  trackNumber: number;
  timestamp: string;
}