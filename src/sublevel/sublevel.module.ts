import { Module } from '@nestjs/common';
import { SublevelService } from './sublevel.service';
import { SublevelController } from './sublevel.controller';
import { SublevelSchema } from './sublevel.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sublevel', schema: SublevelSchema }])
  ],
  controllers: [SublevelController],
  providers: [SublevelService]
})
export class SublevelModule {}
