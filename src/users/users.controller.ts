import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user';
import {UsersService} from './users.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './users.model';
import {LoginUserDto} from './dto/login-user';
import {JwtAuthGuard} from '../auth/jwt.guard';
import {Roles, RolesGuard} from '../auth/roles.middleware';
import {Role} from '../constants/role.enum';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя',})
  @ApiResponse({status: 200, type: User,})
  @Post('')
  async create(@Body() userDto: CreateUserDto) {
    return await this.usersService.createUser(userDto);
  }

  @ApiOperation({summary: 'Создание пользователя',})
  @Post('login')
  async login(@Body() userDto: LoginUserDto) {
    return await this.usersService.login(userDto.login, userDto.password);
  }

  @ApiOperation({summary: 'Список пользователей',})
  @ApiResponse({status: 200, type: [User,],})
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getList() {
    return await this.usersService.getList();
  }
}
