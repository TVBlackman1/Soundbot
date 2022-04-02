import {Injectable, UnauthorizedException, ConflictException, BadRequestException} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from './users.model';
import {CreateUserDto} from './dto/create-user';
import {QueryFindUserDto} from './dto/query-find-user';
import {JwtService} from '@nestjs/jwt';
import {JwtFormat} from './dto/jwt-format';
import {Role} from '../constants/role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {}

  public async createUser(dto: CreateUserDto) {
    const userInRepository = await this.findUserByQuery({login: dto.login,});
    if (userInRepository) {
      throw new UserAlreadyExistsException();
    }
    if (this.checkRole(dto.role)) {
      throw new NotValidRoleException();
    }
    const user = await this.userRepository.create(dto);
    return user;
  }

  public async getList() {
    const users = this.userRepository.findAll();
    return users;
  }

  public async login(login: string, password: string): Promise<{data: string}> {
    await this.findUserByQuery({login,});
    const userInRepository = await this.userRepository.findOne({
      attributes: ['id', 'password',],
      where: {login,},
    });
    if (password !== userInRepository.password) {
      throw new UnauthorizedException();
    }
    const payload: JwtFormat = {id: userInRepository.id,};
    const token = await this.jwtService.signAsync(payload);
    return {
      data: token,
    };
  }

  public async findUserByQuery(dto: QueryFindUserDto, fields: string[] = []): Promise<User> {
    const query: QueryFindUserDto = {};
    if (dto.id) {
      query.id = dto.id;
    } else if (dto.login) {
      query.login = dto.login;
    } else {
      throw new Error('Not valid user query');
    }
    const selectedAttributes = fields.length > 0 ? fields : {exclude: ['password', 'email',],};
    return await this.userRepository.findOne({
      where: {...query,},
      attributes: selectedAttributes,
    });
  }
  
  private checkRole(role: string = undefined): boolean {
    const isValidRole = [Role.Admin.toString(), Role.User.toString(),].includes(role);
    return isValidRole || !role;
  }
}

class UserAlreadyExistsException extends ConflictException {
  constructor() {
    super('User already exists');
  }
}

class NotValidRoleException extends BadRequestException {
  constructor() {
    super('Not valid role');
  }
}
