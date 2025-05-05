import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { WordModule }   from './modules/word/word.module';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [
    PrismaModule,
    WordModule,
    ReviewModule,
  ],
})
export class AppModule {}
