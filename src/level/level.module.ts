import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { LevelSchema } from './level.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Level', schema: LevelSchema }])
  ],
  controllers: [LevelController],
  providers: [LevelService]
})
export class LevelModule {}
