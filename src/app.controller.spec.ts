import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('findAll', () => {
    it('should return the stats', async () => {
      const result = [
        {
          _id: 'id',
          mutation: true,
          createdAt: Date.now()
        }
      ];

      expect(await appController.stats()).toBe(result);
    });
  });
});
