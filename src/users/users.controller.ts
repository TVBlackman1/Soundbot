import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user';
import {UsersService} from './users.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './users.model';
import {AuthGuard} from '@nestjs/passport';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({summary: 'Список пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getList() {
    return this.usersService.getList();
  }
}
