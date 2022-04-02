import {Test, TestingModule} from '@nestjs/testing';
import {MusicTrackService} from './music-track.service';

describe('MusicTrackService', () => {
  let service: MusicTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicTrackService,],
    }).compile();

    service = module.get<MusicTrackService>(MusicTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
