import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';
import { WordService } from './word.service';
import { WordController } from './word.controller';

@Module({
  controllers: [WordController],
  providers: [WordService]
})
export class WordModule {}
