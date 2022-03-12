import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async getUserToken(): Promise<string> {
    return 'hello world';
  }
  async validateUserToken(token: string): Promise<string> {
    return 'hello world';
  }
}
