import { Module } from '@nestjs/common';
import { GapService } from './gap.service';

@Module({
  providers: [GapService]
})
export class GapModule {}
