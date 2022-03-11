import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import config from './config';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sound bot')
    .setDescription('Документация для sound bot проекта')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(config.PORT, () => {
    console.log(`App is listening at ${config.PORT}`);
  });
}

bootstrap();
