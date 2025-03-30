import { Test, TestingModule } from '@nestjs/testing';
import { AiQuerriesService } from './ai_querries.service';

describe('AiQuerriesService', () => {
  let service: AiQuerriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiQuerriesService],
    }).compile();

    service = module.get<AiQuerriesService>(AiQuerriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
