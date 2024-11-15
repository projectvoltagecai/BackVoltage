import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ilevel } from './level.model';
import { LevelDto } from './level.DTO';

@Injectable()
export class LevelService {

    constructor(@InjectModel('Level') private levelModel: Model<Ilevel>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Niveles'
    }
    //CRUD Levels
    //Crear Level
    async CreateLevel(level: LevelDto){
        const resultado = new this.levelModel(level)
        return await resultado.save()
    }
    //Encontrar Levels
    async getAllLevels() : Promise <Ilevel[]>{
        return await this.levelModel.find().exec()
    }
    //Borrar Level
    async deleteLevel(id: string){
        const resultado = await this.levelModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Level
    async updateLevel(id: string, level: LevelDto){
        const resultado = await this.levelModel.findByIdAndUpdate(id, level)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
