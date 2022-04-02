import {ApiProperty} from '@nestjs/swagger';

export class QueryFindUserDto {
  @ApiProperty({example: 'login', required: false,})
  login?: string;
  id?: number;
}
