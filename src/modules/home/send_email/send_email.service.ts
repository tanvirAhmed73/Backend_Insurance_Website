import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send_email.dto';
import { UpdateSendEmailDto } from './dto/update-send_email.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendEmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: true,
      auth: {
        user: this.configService.get<string>('mail_username'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  async sendEmail(createSendEmailDto: CreateSendEmailDto) {
    try {
      const { firstName, lastName, email, insurance } = createSendEmailDto;
      
      const mailOptions = {
        from: this.configService.get<string>('mail_username'),
        to: email,
        subject: 'Insurance Inquiry',
        html: `
          <h2>Insurance Inquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Insurance Type:</strong> ${insurance}</p>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      return { message: 'Email sent successfully' };
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}