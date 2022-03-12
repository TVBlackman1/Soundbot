import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from './users.model';
import {CreateUserDto} from './dto/create-user';
import {QueryFindUserDto} from './dto/query-find-user';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getList() {
    const users = this.userRepository.findAll();
    return users;
  }

  async findUserByQuery({email, login}: {email?: string; login?: string}) {
    const query: QueryFindUserDto = {};
    if (login) {
      query.login = login;
    } else if (email) {
      query.email = email;
    } else {
      throw new Error('Not valid user query');
    }
  }
}
