import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailController } from './send_email.controller';
import { SendEmailService } from './send_email.service';

describe('SendEmailController', () => {
  let controller: SendEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendEmailController],
      providers: [SendEmailService],
    }).compile();

    controller = module.get<SendEmailController>(SendEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
