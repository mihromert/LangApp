// backend/src/modules/review/review.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from '@prisma/client';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // GET /reviews/due
  @Get('due')
  async getDue(): Promise<Review[]> {
    return this.reviewService.findDue();
  }

  // POST /reviews
  @Post()
  async answer(
    @Body() body: { reviewId: string; quality: number }
  ): Promise<Review> {
    return this.reviewService.scheduleNext(body.reviewId, body.quality);
  }
}
