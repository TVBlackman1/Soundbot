import {UserId} from '../../users/dto/full-user';
import {FullMusicTrack} from '../../music-track/dto/full-music-track';

export type PlaylistId = string;

export class FullPlaylist {
  id: PlaylistId;
  name: string;
  userId: UserId;
  tracks: FullMusicTrack[];
  
  public static fromMusicTrack(musicTrack: FullMusicTrack): FullPlaylist {
    return {
      id: undefined,
      name: FullPlaylist.name,
      userId: musicTrack.userId,
      tracks: [musicTrack,],
    };
  }
}