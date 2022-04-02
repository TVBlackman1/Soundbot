import {diskStorage} from 'multer';
import * as mime from 'mime-types';
import {MulterModule as InnerMulterModule} from '@nestjs/platform-express';

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, './upload');
  },
  filename(req, file: Express.Multer.File, cb) {
    const uniqueSymbols = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = mime.extension(file.mimetype);
    cb(null, `${uniqueSymbols}.${extension}`);
  },
});

export const LocalMulterModule = InnerMulterModule.register({
  storage,
});