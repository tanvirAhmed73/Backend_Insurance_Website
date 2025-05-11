import { PartialType } from '@nestjs/swagger';
import { CreateSendEmailDto } from './create-send_email.dto';

export class UpdateSendEmailDto extends PartialType(CreateSendEmailDto) {}
