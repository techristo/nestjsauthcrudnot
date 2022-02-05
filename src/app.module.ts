import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MailModule } from './mail/mail.module';
import { QuotesService } from './services/quotes/quotes.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),ConfigModule.forRoot({
    isGlobal: true, // no need to import into other modules
  }), AuthModule, UsersModule, ProductsModule, MailModule],
  controllers: [AppController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
