import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user';
import {UsersService} from './users.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './users.model';
import {LoginUserDto} from './dto/login-user';
import {JwtAuthGuard} from '../auth/jwt.guard';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return await this.usersService.createUser(userDto);
  }

  @Post('login')
  async login(@Body() userDto: LoginUserDto) {
    return await this.usersService.login(userDto.login, userDto.password);
  }

  @ApiOperation({summary: 'Список пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @UseGuards(JwtAuthGuard)
  @Get()
  async getList(@Request() req) {
    return await this.usersService.getList();
  }
}
