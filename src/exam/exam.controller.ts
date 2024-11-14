import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExamDto } from './exam.DTO';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {

    constructor(private readonly userService: ExamService) {}
    
    @Get()
    userHola(): string {
        return this.userService.saludo()
    }
    
    @Post()
    async create(@Body() exam: ExamDto) {
        const result = await this.userService.CreateExam(exam)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllExams() {
        return await this.userService.getAllExams()
    }

    @Delete('/:id')
    async deleteExam(@Param("id") id:string) {
        const result = await this.userService.deleteExam(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Exámen no existe"}
    }

    @Patch('/:id')
    async updateExam(@Param("id") id:string, @Body() exam: ExamDto) {
        const result = await this.userService.updateExam(id, exam)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Exámen no se pudo actualizar, no existe o no tiene permisos"}
    }
}
