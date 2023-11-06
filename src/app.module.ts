import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [PostgresProviderModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
