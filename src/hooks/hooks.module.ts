import { Module } from '@nestjs/common';
import { HooksService } from './hooks.service';

@Module({
  providers: [HooksService]
})
export class HooksModule {}