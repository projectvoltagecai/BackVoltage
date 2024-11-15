import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iexercise } from './exercise.model';
import { ExerciseDto } from './exercise.DTO';

@Injectable()
export class ExerciseService {

    constructor(@InjectModel('Exercise') private exerciseModel: Model<Iexercise>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Ejercicios'
    }
    //CRUD Exercises
    //Crear Exercise
    async CreateExercise(exercise: ExerciseDto){
        const resultado = new this.exerciseModel(exercise)
        return await resultado.save()
    }
    //Encontrar Exercises
    async getAllExercises() : Promise <Iexercise[]>{
        return await this.exerciseModel.find().exec()
    }
    //Borrar Exercise
    async deleteExercise(id: string){
        const resultado = await this.exerciseModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Exercise
    async updateExercise(id: string, exercise: ExerciseDto){
        const resultado = await this.exerciseModel.findByIdAndUpdate(id, exercise)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
