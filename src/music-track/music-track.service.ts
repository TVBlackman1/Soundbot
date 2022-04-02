import {BadRequestException, Injectable} from '@nestjs/common';
import {User} from '../users/users.model';

@Injectable()
export class MusicTrackService {
  download(user: User, file: Express.Multer.File) {
    if (!file) {
      throw new NoFileException();
    }
  }
}

class NoFileException extends BadRequestException{
  constructor() {
    super('File was not uploaded');
  }
}