import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { ProductTransitionService } from './productTransition.service';
import { ProductTransitionController } from './productTransition.controller';

@Module({
  exports: [ProductTransitionService],
  controllers: [ProductTransitionController],
  providers: [ProductTransitionService],
  imports: [UserModule],
})
export class ProductTransitionModule {}
