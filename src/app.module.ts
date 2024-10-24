import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath:['.env.development'],
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.URI_MONGODB,{
   
  }
  )

    ,QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
