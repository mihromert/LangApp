import { Test, TestingModule } from '@nestjs/testing';
import { WordsetService } from './wordset.service';

describe('WordsetService', () => {
  let service: WordsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordsetService],
    }).compile();

    service = module.get<WordsetService>(WordsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
