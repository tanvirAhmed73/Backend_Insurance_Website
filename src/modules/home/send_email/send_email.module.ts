import { Module } from '@nestjs/common';
import { SendEmailService } from './send_email.service';
import { SendEmailController } from './send_email.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [SendEmailController],
  providers: [SendEmailService],
})
export class SendEmailModule {}
