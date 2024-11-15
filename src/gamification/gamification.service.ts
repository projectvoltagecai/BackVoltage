import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Igamification } from './gamification.model';
import { GamificationDto } from './gamification.DTO';

@Injectable()
export class GamificationService {

    constructor(@InjectModel('Gamification') private gamificationModel: Model<Igamification>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Gamificaciones'
    }
    //CRUD Gamifications
    //Crear Gamification
    async CreateGamification(gamification: GamificationDto){
        const resultado = new this.gamificationModel(gamification)
        return await resultado.save()
    }
    //Encontrar Gamifications
    async getAllGamifications() : Promise <Igamification[]>{
        return await this.gamificationModel.find().exec()
    }
    //Borrar Gamification
    async deleteGamification(id: string){
        const resultado = await this.gamificationModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Gamification
    async updateGamification(id: string, gamification: GamificationDto){
        const resultado = await this.gamificationModel.findByIdAndUpdate(id, gamification)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
