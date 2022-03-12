type environmentConfig = Required<{
  PORT: number;
  POSTGRES_PORT: number;
  POSTGRES_DBNAME: string;
  POSTGRES_PASS: string;
  POSTGRES_USER: string;
  POSTGRES_HOST: string;
  SECRET_KEY: string;
}>;

const config: environmentConfig = {
  PORT: Number(process.env.PORT) || 9122,
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT) || 5432,
  POSTGRES_DBNAME: process.env.POSTGRES_DBNAME || 'sound_bot',
  POSTGRES_PASS: process.env.POSTGRES_PASS || 'postgres',
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  SECRET_KEY: process.env.SECRET_KEY || 'SECRET',
};

export default config;
