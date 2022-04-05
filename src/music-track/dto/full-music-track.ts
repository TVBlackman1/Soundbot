import {UserId} from '../../users/dto/full-user';

export type MusicTrackId = string;

export class FullMusicTrack {
  id: MusicTrackId;
  userId: UserId;
  name: string;
  path: string;
  volume: number;
}