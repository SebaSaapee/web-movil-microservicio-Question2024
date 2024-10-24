import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QUESTION, USER } from 'src/common/models/models';
import { QuestionSchema } from './schema/question.schema';
import { UserSchema } from './schema/user.schema';


@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:QUESTION.name,
      useFactory:()=>QuestionSchema
      },
      {
        name: USER.name, // Nombre del modelo de usuario
        useFactory: () => UserSchema,
    },
    
  ])
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
  })
export class QuestionModule {}
