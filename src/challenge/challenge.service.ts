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
    //CRUD Challenge
    //Crear Challenge
    async CreateChallenge(challenge: ChallengeDto){
        const resultado = new this.challengeModel(challenge)
        return await resultado.save()
    }
    //Encontrar Challenge
    async getAllChallenges() : Promise <Ichallenge[]>{
        return await this.challengeModel.find().exec()
    }
    //Borrar Challenge
    async deleteChallenge(id: string){
        const resultado = await this.challengeModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Challenge
    async updateChallenge(id: string, challenge: ChallengeDto){
        const resultado = await this.challengeModel.findByIdAndUpdate(id, challenge)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
