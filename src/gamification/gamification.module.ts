import { Module } from '@nestjs/common';
import { GamificationService } from './gamification.service';
import { GamificationController } from './gamification.controller';
import { GamificationSchema } from './gamification.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gamification', schema: GamificationSchema }])
  ],
  controllers: [GamificationController],
  providers: [GamificationService]
})
export class GamificationModule {}
