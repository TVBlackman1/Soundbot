import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';

const SECRET_KEY = process.env.SECRET_KEY || 'SECRET';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: SECRET_KEY,
    });
  }

  async validate(payload: any): Promise<any> {
    return payload;
  }
}

export const JwtLocalModule = JwtModule.register({
  secret: SECRET_KEY,
});
