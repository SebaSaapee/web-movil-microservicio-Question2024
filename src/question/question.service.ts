import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  QUESTION, USER} from 'src/common/models/models';
import { QuestionDTO } from './dto/question.dto';
import { IQuestion } from 'src/common/interface/question.interface';

import { IUser } from 'src/common/interface/user.interface';


@Injectable()
export class QuestionService {
  logger: any;

    constructor(@InjectModel(QUESTION.name) private readonly model:Model<IQuestion>,
    @InjectModel(USER.name) private readonly userModel: Model<IUser>,
      ){}


async create(questionDTO: QuestionDTO): Promise<IQuestion> {
    const newService = new this.model({
    ...questionDTO,
               // Puedes agregar otros campos predeterminados o configuraciones aquí si es necesario
        }); // Guardar el servicio en la base de datos y retornar el resultado
 return await newService.save();
}



async findAll(): Promise<IQuestion[]>{
    return await this.model.find()
}

async findOne(id:string): Promise<IQuestion>{
    return await this.model.findById(id);
}

async update(id: string, questionDTO: QuestionDTO): Promise<IQuestion> {
  return await this.model.findByIdAndUpdate(id, questionDTO, { new: true });
}

async delete(id:string){
    await this.model.findByIdAndDelete(id);
    return {status:HttpStatus.OK,msg:'deleted'}
}

async findByUser(userId: string): Promise<IQuestion[]> {
  return await this.model.find({ user_id: userId });
}


}


