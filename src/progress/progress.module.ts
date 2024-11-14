import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { ProgressSchema } from './progress.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Progress', schema: ProgressSchema }])
  ],
  controllers: [ProgressController],
  providers: [ProgressService]
})
export class ProgressModule {}
