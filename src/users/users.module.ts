import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users.model';
import {JwtStrategy} from '../auth/jwt.strategy';
import {JwtModule} from '@nestjs/jwt';

const SECRET_KEY = process.env.SECRET_KEY || 'SECRET';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: SECRET_KEY,
    }),
  ],
})
export class UsersModule {}
