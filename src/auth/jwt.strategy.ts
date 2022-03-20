import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {User} from '../users/users.model';

const SECRET_KEY = process.env.SECRET_KEY || 'SECRET';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-user') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: SECRET_KEY,
      ignoreExpiration: true,
    });
  }

  async validate(payload: any): Promise<User> {
    if (!payload.id) {
      throw new UnauthorizedException('Bad jwt payload');
    }
    const user = await this.usersService.findUserByQuery({id: payload.id});
    if (!user) {
      throw new UnauthorizedException('User is not found');
    }
    return user;
  }
}

export const JwtLocalModule = JwtModule.register({
  secret: SECRET_KEY,
});
