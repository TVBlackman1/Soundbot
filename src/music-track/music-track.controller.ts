import {Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {MusicTrackService} from './music-track.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {JwtAuthGuard} from '../auth/jwt.guard';
import {User} from '../users/users.model';

@Controller('music-track')
export class MusicTrackController {
  constructor(private musicTrackService: MusicTrackService) {}
  
  @Post('/download')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  public downloadMusicTrack(@Req() req, @UploadedFile() file: Express.Multer.File) {
    const user = req.user as User;
    this.musicTrackService.download(user, file);
  }
}
