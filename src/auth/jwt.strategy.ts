import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {Request} from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const SECRET_KEY = process.env.SECRET_KEY || 'SECRET';
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: SECRET_KEY,
    });
  }

  async validate(payload: any): Promise<any> {
    return payload;
  }
}
