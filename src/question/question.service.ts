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


    async create(questionDTO: QuestionDTO, userId: string): Promise<IQuestion> {
        // Verificar si el usuario existe antes de proceder
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Asociar el ID de usuario al servicio que estás creando
        const newService = new this.model({
            ...questionDTO,
            user_id: userId, // Asigna el ID del usuario al campo user_id del servicio
        // Default rating to 0 if not provided
        });

        // Guardar el servicio en la base de datos y retornar el resultado
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


