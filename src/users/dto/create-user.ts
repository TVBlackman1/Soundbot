import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'some@mail.ru', required: false})
  readonly email?: string;
  @ApiProperty({example: 'login'})
  readonly login: string;
  @ApiProperty({example: 'qwerty'})
  readonly password: string;
  @ApiProperty({example: 'user'})
  readonly role: string;
}
