import { Module } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { VocabularySchema } from './vocabulary.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vocabulary', schema: VocabularySchema }])
  ],
  controllers: [VocabularyController],
  providers: [VocabularyService]
})
export class VocabularyModule {}
