import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDTO } from './dto/question.dto';
import {MessagePattern, Payload} from '@nestjs/microservices'
import { QuestionsMSG } from 'src/common/constants';


@Controller()
export class QuestionController {
    private readonly logger = new Logger(QuestionController.name);
    constructor(private readonly questionService:QuestionService){}

    @MessagePattern(QuestionsMSG.CREATE)
    async create(@Payload() payload: { questionDTO: QuestionDTO, userId: string }) {
        const { questionDTO, userId } = payload;

        try {
            const createdService = await this.questionService.create(questionDTO);
            return { message: 'Service created successfully', service: createdService };
        } catch (error) {
            this.logger.error(`Error creating service: ${error.message}`);
            throw error; // Propagate the error to handle it properly
        }
    }
    @MessagePattern(QuestionsMSG.FIND_ALL)
    findAll(){
        return this.questionService.findAll();
    }
    @MessagePattern(QuestionsMSG.FIND_ONE)
    findOne(@Payload() id:string){
        return this.questionService.findOne(id);
    }

    @MessagePattern(QuestionsMSG.UPDATE)
    update(@Payload() payload: { id: string, serviceDTO: QuestionDTO }) {
        return this.questionService.update(payload.id, payload.serviceDTO);
    }

    @MessagePattern(QuestionsMSG.DELETE)
    delete(@Payload() id:string){
        return this.questionService.delete(id);
    }

   

    @MessagePattern(QuestionsMSG.FIND_BY_USER)
    findByUser(@Payload() userId: string) {
        return this.questionService.findByUser(userId);
    }

   

   

}


