import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'login',})
  readonly login: string;
  @ApiProperty({example: 'qwerty',})
  readonly password: string;
  @ApiProperty({example: 'user',})
  readonly role: string;
}
