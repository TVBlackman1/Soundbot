import {Column, DataType, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';

interface MusicTrackCreationAttributes {
  name: string;
  path: string;
  userId: number;
  volume: number;
}

@Table({tableName: 'music_tracks',})
export class MusicTrack extends Model<MusicTrack, MusicTrackCreationAttributes> {
  @ApiProperty({example: 1,})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @ApiProperty({example: 'main theme',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  
  @ApiProperty({example: '/usr/music/file.mp3',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  path: string;
  
  @ApiProperty({example: 1,})
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
  
  @ApiProperty({example: 68,})
  @Column({
    type: DataType.INTEGER,
    defaultValue: 100,
  })
  volume: number;
}
