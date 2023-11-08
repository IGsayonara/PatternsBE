import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { UserModule } from './models/user/user.module';
import { ProductModule } from './models/products/product.module';
import { AuthModule } from './authentication/auth.module';
import { ProductTransitionModule } from './models/productTransition/productTransition.module';

@Module({
  imports: [
    PostgresProviderModule,
    UserModule,
    ProductTransitionModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
