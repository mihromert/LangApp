import { Module } from '@nestjs/common';
import { WordsetController } from './wordset.controller';
import { WordsetService } from './wordset.service';

@Module({
  controllers: [WordsetController],
  providers: [WordsetService]
})
export class WordsetModule {}
