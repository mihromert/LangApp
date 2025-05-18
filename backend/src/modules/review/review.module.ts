// backend/src/modules/review/review.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
