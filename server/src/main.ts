import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import detect from 'detect-port';

async function bootstrap() {
  const DEFAULT_PORT = 3000;
  const port = await detect(DEFAULT_PORT);

  if (port !== DEFAULT_PORT) {
      console.warn(`⚠️  Port ${DEFAULT_PORT} is busy, I'll use a free port ${port}`);
  }

  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(port);
    console.log(`🚀 Server is listening on http://localhost:${port}`);
}
bootstrap();
