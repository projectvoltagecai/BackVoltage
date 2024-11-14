import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ichallenge } from './challenge.model';
import { ChallengeDto } from './challenge.DTO';

@Injectable()
export class ChallengeService {

    constructor(@InjectModel('Challenge') private challengeModel: Model<Ichallenge>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Challenges'
    }
    //CRUD Usuarios
    //Crear Usuario
    async CreateChallenge(challenge: ChallengeDto){
        const resultado = new this.challengeModel(challenge)
        return await resultado.save()
    }
    //Encontrar Usuarios
    async getAllChallenges() : Promise <Ichallenge[]>{
        return await this.challengeModel.find().exec()
    }
    //Borrar Usuario
    async deleteChallenge(id: string){
        const resultado = await this.challengeModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Usuario
    async updateChallenge(id: string, challenge: ChallengeDto){
        const resultado = await this.challengeModel.findByIdAndUpdate(id, challenge)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
