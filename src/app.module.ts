import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GamificationModule } from './gamification/gamification.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { ChallengeModule } from './challenge/challenge.module';
import { ExerciseModule } from './exercise/exercise.module';
import { SkillsModule } from './skills/skills.module';
import { ExamModule } from './exam/exam.module';
import { LevelModule } from './level/level.module';
import { SublevelModule } from './sublevel/sublevel.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgressModule } from './progress/progress.module';
import { GapModule } from './gap/gap.module';


@Module({
  imports: [
    //MongooseModule.forRoot('mongodb+srv://Admin:semillero2024*@cluster0.fh05x.mongodb.net/Voltage_dev'),
    MongooseModule.forRoot('mongodb+srv://Admin:semillero2024*@cluster0.vhq3q.mongodb.net/Voltage_dev'),    
    UserModule, GamificationModule, VocabularyModule, ChallengeModule, ExerciseModule, SkillsModule, ExamModule, LevelModule, SublevelModule, ProgressModule, GapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


