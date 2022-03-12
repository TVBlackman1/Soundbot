import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
// import {AuthService} from './auth.service';
import config from '../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(/*private authService: AuthService*/) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      secretOrKey: config.SECRET_KEY,
    });
  }

  async validate(jstToken: string): Promise<any> {
    console.log(jstToken);
    return true;
  }
}
