import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExerciseDto } from './exercise.DTO';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {

    constructor(private readonly exerciseService: ExerciseService) {}
    
    @Get()
    exerciseHola(): string {
        return this.exerciseService.saludo()
    }
    
    @Post()
    async create(@Body() exercise: ExerciseDto) {
        const result = await this.exerciseService.CreateExercise(exercise)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllExercises() {
        return await this.exerciseService.getAllExercises()
    }

    @Delete('/:id')
    async deleteExercise(@Param("id") id:string) {
        const result = await this.exerciseService.deleteExercise(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Ejercicio no existe"}
    }

    @Patch('/:id')
    async updateExercise(@Param("id") id:string, @Body() exercise: ExerciseDto) {
        const result = await this.exerciseService.updateExercise(id, exercise)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Ejercicio no se pudo actualizar, no existe o no tiene permisos"}
    }
}
