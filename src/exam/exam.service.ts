import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iexam } from './exam.model';
import { ExamDto } from './exam.DTO';

@Injectable()
export class ExamService {

    constructor(@InjectModel('Exam') private examModel: Model<Iexam>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Examenes'
    }
    //CRUD Exams
    //Crear Exam
    async CreateExam(exam: ExamDto){
        const resultado = new this.examModel(exam)
        return await resultado.save()
    }
    //Encontrar Exams
    async getAllExams() : Promise <Iexam[]>{
        return await this.examModel.find().exec()
    }
    //Borrar Exam
    async deleteExam(id: string){
        const resultado = await this.examModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Exam
    async updateExam(id: string, exam: ExamDto){
        const resultado = await this.examModel.findByIdAndUpdate(id, exam)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
