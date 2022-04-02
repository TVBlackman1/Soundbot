import {Test, TestingModule} from '@nestjs/testing';
import {MusicTrackController} from './music-track.controller';

describe('MusicTrackController', () => {
  let controller: MusicTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicTrackController,],
    }).compile();

    controller = module.get<MusicTrackController>(MusicTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
