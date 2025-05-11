import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendEmailService } from './send_email.service';
import { CreateSendEmailDto } from './dto/create-send_email.dto';
import { UpdateSendEmailDto } from './dto/update-send_email.dto';

@Controller('send-email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @Post()
  async create(@Body() createSendEmailDto: CreateSendEmailDto) {
    try {
      const result = await this.sendEmailService.sendEmail(createSendEmailDto);
      return {
        status:true,
        message:result.message,
      }
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

}
