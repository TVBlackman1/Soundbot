import {BadRequestException, Injectable} from '@nestjs/common';
import {MusicTrack} from './music-track.model';
import {InjectModel} from '@nestjs/sequelize';
import {User} from '../users/users.model';

@Injectable()
export class MusicTrackService {
  constructor(@InjectModel(MusicTrack) private trackRepository: typeof MusicTrack) {}
  
  // eslint-disable-next-line no-undef
  public async download(user: User, file: Express.Multer.File) {
    if (!file) {
      throw new NoFileException();
    }
    const savedTrack = await this.trackRepository.create({
      name: file.originalname,
      path: file.path,
      userId: user.id,
      volume: 100,
    });
    console.log(savedTrack);
    return {
      data: null,
    };
  }
}

class NoFileException extends BadRequestException{
  constructor() {
    super('File was not uploaded');
  }
}