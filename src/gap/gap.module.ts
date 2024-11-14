import { Module } from '@nestjs/common';
import { GapService } from './gap.service';
import { GapController } from './gap.controller';
import { GapSchema } from './gap.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gap', schema: GapSchema }])
  ],
  controllers: [GapController],
  providers: [GapService]
})
export class GapModule {}
