import {ApiProperty} from '@nestjs/swagger';

export class QueryFindUserDto {
  @ApiProperty({example: 'some@mail.ru', required: false})
  email?: string;
  @ApiProperty({example: 'login', required: false})
  login?: string;
  id?: number;
}
