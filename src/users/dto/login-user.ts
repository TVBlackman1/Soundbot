import {ApiProperty} from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({example: 'login'})
  readonly login: string;
  @ApiProperty({example: 'qwerty'})
  readonly password: string;
}
