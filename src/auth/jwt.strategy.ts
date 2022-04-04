import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {User} from '../users/users.model';
import {GettersConfigService} from '../config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-user') {
  constructor(private usersService: UsersService, private configService: GettersConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: configService.JWT_KEY,
      ignoreExpiration: true,
    });
  }

  async validate(payload: any): Promise<User> {
    if (!payload.id) {
      throw new UnauthorizedException('Bad jwt payload');
    }
    const user = await this.usersService.findUserByQuery({id: payload.id,});
    if (!user) {
      throw new UnauthorizedException('User is not found');
    }
    return user;
  }
}

export const JwtLocalModule = JwtModule.registerAsync({
  useFactory: async (configService: GettersConfigService) => ({
    secret: configService.JWT_KEY,
  }),
  inject: [GettersConfigService,],
});
