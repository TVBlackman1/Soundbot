import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {Request} from 'express';

// import {AuthService} from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(/*private authService: AuthService*/) {
    const SECRET_KEY = process.env.SECRET_KEY || 'SECRET';
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: SECRET_KEY,
    });
    console.log(SECRET_KEY);
  }

  async validate(payload: any): Promise<any> {
    console.log(payload);
    return payload;
    // return true;
  }
}
