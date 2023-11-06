import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { UserModule } from './models/user/user.module';
import { ProductModule } from './models/products/product.module';

@Module({
  imports: [PostgresProviderModule, UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
