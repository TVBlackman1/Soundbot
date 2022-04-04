export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}

export type EnvironmentType = keyof typeof Environment;

export const ConfigFields = {
  PORT: 'PORT',
  JWT_KEY: 'JWT_KEY',
  POSTGRES_HOST: 'POSTGRES_HOST',
  POSTGRES_PORT: 'POSTGRES_PORT',
  POSTGRES_USER: 'POSTGRES_USER',
  POSTGRES_PASS: 'POSTGRES_PASS',
  POSTGRES_DBNAME: 'POSTGRES_DBNAME',
  NODE_ENV: 'NODE_ENV',
};