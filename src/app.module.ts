import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyMiddleware } from './middleware/apikey-middleware';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({
    isGlobal: true, 
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*'); // Apply to all routes
  }
}
