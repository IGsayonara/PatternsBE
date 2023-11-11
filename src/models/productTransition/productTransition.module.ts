import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { ProductTransitionService } from './productTransition.service';
import { ProductTransitionController } from './productTransition.controller';
import { ProductModule } from '../products/product.module';

@Module({
  exports: [ProductTransitionService],
  controllers: [ProductTransitionController],
  providers: [ProductTransitionService],
  imports: [UserModule, ProductModule],
})
export class ProductTransitionModule {}
