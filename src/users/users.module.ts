import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users.model';
import {JwtStrategy, JwtLocalModule} from '../auth/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [SequelizeModule.forFeature([User]), JwtLocalModule],
})
export class UsersModule {}
