import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Igap } from './gap.model';
import { GapDto } from './gap.DTO';

@Injectable()
export class GapService {

    constructor(@InjectModel('Gap') private gapModel: Model<Igap>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Usuarios'
    }
    //CRUD Usuarios
    //Crear Usuario
    async CreateGap(gap: GapDto){
        const resultado = new this.gapModel(gap)
        return await resultado.save()
    }
    //Encontrar Usuarios
    async getAllGaps() : Promise <Igap[]>{
        return await this.gapModel.find().exec()
    }
    //Borrar Usuario
    async deleteGap(id: string){
        const resultado = await this.gapModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Usuario
    async updateGap(id: string, gap: GapDto){
        const resultado = await this.gapModel.findByIdAndUpdate(id, gap)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
