import { Test, TestingModule } from '@nestjs/testing';
import { AiQuerriesController } from './ai_querries.controller';
import { AiQuerriesService } from './ai_querries.service';

describe('AiQuerriesController', () => {
  let controller: AiQuerriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiQuerriesController],
      providers: [AiQuerriesService],
    }).compile();

    controller = module.get<AiQuerriesController>(AiQuerriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
