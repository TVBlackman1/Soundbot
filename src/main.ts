import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common';
import {GettersConfigService} from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true,});

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sound bot')
    .setDescription('Документация для sound bot проекта')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  const configService = app.get(GettersConfigService);
  const PORT = configService.PORT;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
  });
}

bootstrap();
