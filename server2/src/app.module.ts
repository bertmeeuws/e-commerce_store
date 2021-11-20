import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthenticationController, ProductController],
  providers: [AppService, AuthenticationService, ProductService],
})
export class AppModule {}
