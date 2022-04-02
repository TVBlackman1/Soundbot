import {Column, DataType, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {Role} from '../constants/role.enum';

interface UserCreationAttributes {
  login: string;
  email?: string;
  password: string;
}

@Table({tableName: 'users',})
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({example: 1,})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'login',})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @ApiProperty({example: 'some@mail.ru',})
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({example: Role.User,})
  @Column({
    type: DataType.STRING,
    defaultValue: Role.User,
  })
  role: string;

  @ApiProperty({example: 'qwerty',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({example: true,})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  enabled: boolean;
}
