import { Test, TestingModule } from '@nestjs/testing';
import { WordsetController } from './wordset.controller';

describe('WordsetController', () => {
  let controller: WordsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordsetController],
    }).compile();

    controller = module.get<WordsetController>(WordsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
