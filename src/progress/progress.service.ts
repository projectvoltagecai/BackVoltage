import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iprogress } from './progress.model';
import { ProgressDto } from './progress.DTO';

@Injectable()
export class ProgressService {

    constructor(@InjectModel('Progress') private progressModel: Model<Iprogress>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Progresos'
    }
    //CRUD Progress
    //Crear Progress
    async CreateProgress(progress: ProgressDto){
        const resultado = new this.progressModel(progress)
        return await resultado.save()
    }
    //Encontrar Progress
    async getAllProgresss() : Promise <Iprogress[]>{
        return await this.progressModel.find().exec()
    }
    //Borrar Progress
    async deleteProgress(id: string){
        const resultado = await this.progressModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Progress
    async updateProgress(id: string, progress: ProgressDto){
        const resultado = await this.progressModel.findByIdAndUpdate(id, progress)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
