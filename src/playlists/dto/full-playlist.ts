import {UserId} from '../../users/dto/full-user';
import {FullMusicTrack} from '../../music-track/dto/full-music-track';
import {ProjectId} from '../../projects/dto/full-project';

export type PlaylistId = string;

export class FullPlaylist {
  id: PlaylistId;
  projectId: ProjectId;
  name: string;
  tracks: FullMusicTrack[];
  
  public static fromMusicTrack(musicTrack: FullMusicTrack, projectId: ProjectId): FullPlaylist {
    return {
      id: undefined,
      name: FullPlaylist.name,
      projectId,
      tracks: [musicTrack,],
    };
  }
}