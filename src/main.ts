import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ConfigService} from '@nestjs/config';
import {ValidationPipe} from '@nestjs/common';
import {ConfigFields} from './config/config.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true,});

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sound bot')
    .setDescription('Документация для sound bot проекта')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>(ConfigFields.PORT);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
  });
}

bootstrap();
