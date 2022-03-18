import {Injectable, UnauthorizedException, ConflictException} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from './users.model';
import {CreateUserDto} from './dto/create-user';
import {QueryFindUserDto} from './dto/query-find-user';
import {JwtService} from '@nestjs/jwt';
import {JwtFormat} from './dto/jwt-format';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {}

  async createUser(dto: CreateUserDto) {
    const userInRepository = await this.findUserByQuery({login: dto.login});
    if (userInRepository) {
      throw new ConflictException('User already exists');
    }
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getList() {
    const users = this.userRepository.findAll();
    return users;
  }

  async login(login: string, password: string): Promise<{data: string}> {
    await this.findUserByQuery({login});
    const userInRepository = await this.userRepository.findOne({
      attributes: ['id', 'password'],
      where: {login},
    });
    if (password !== userInRepository.password) {
      throw new UnauthorizedException();
    }
    const payload: JwtFormat = {id: userInRepository.id};
    const token = await this.jwtService.signAsync(payload);
    return {
      data: token,
    };
  }

  async findUserByQuery({email, login}: {email?: string; login?: string}, fields: string[] = []): Promise<User> {
    const query: QueryFindUserDto = {};
    if (login) {
      query.login = login;
    } else if (email) {
      query.email = email;
    } else {
      throw new Error('Not valid user query');
    }
    const selectedAttributes = fields.length > 0 ? fields : {exclude: ['password']};
    return await this.userRepository.findOne({
      where: {...query},
      attributes: selectedAttributes,
    });
  }
}
