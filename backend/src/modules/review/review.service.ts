import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Review } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async findDue(): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: { nextDue: { lte: new Date() } },
      include: { word: true },
    });
  }

  async scheduleNext(reviewId: string, quality: number): Promise<Review> {
    const review = await this.prisma.review.findUnique({ where: { id: reviewId } });
    if (!review) throw new NotFoundException('Review not found');

    let { reps, interval, easeFactor: ef } = review;
    reps++;
    if (quality >= 3) {
      if (reps === 1) interval = 1;
      else if (reps === 2) interval = 6;
      else interval = Math.round(interval * ef);

      ef = Math.max(
        1.3,
        ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
      );
    } else {
      reps = 0;
      interval = 1;
    }

    const nextDue = new Date(Date.now() + interval * 24 * 60 * 60 * 1000);
    return this.prisma.review.update({
      where: { id: reviewId },
      data: {
        reps,
        interval,
        easeFactor: ef,
        lastAnswerQuality: quality,
        nextDue,
      },
    });
  }
}
