import {Controller, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {MusicTrackService} from './music-track.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {JwtAuthGuard} from '../auth/jwt.guard';
import {User} from '../users/users.model';
import {ApiOperation, ApiTags} from '@nestjs/swagger';

@ApiTags('Треки')
@Controller('music-tracks')
export class MusicTrackController {
  constructor(private musicTrackService: MusicTrackService) {}
  
  @ApiOperation({summary: 'Добавление трека пользователем',})
  @Post('/upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  // eslint-disable-next-line no-undef
  public async downloadMusicTrack(@Req() req, @UploadedFile() file: Express.Multer.File) {
    const user = req.user as User;
    return await this.musicTrackService.download(user, file);
  }
}
