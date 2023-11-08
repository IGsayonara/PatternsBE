import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from '../user/user.module';

@Module({
  exports: [ProductService],
  controllers: [ProductController],
  providers: [ProductService],
  imports: [UserModule],
})
export class ProductModule {}
