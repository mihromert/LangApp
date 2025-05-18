import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Word } from '@prisma/client';

@Injectable()
export class WordService {
  constructor(private readonly prisma: PrismaService) {}

  /** O sete ait tüm kelimeleri getir */
  async findBySet(setId: string): Promise<Word[]> {
    return this.prisma.word.findMany({
      where: { setId },
      orderBy: { addedAt: 'asc' },
    });
  }

  /** Yeni bir kelime ekle */
  async create(
    setId: string,
    sourceText: string,
    targetText: string
  ): Promise<Word> {
    return this.prisma.word.create({
      data: { setId, sourceText, targetText },
    });
  }
}
