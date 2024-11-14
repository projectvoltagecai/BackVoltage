import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SkillsSchema } from './skills.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Skills', schema: SkillsSchema }])
  ],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
