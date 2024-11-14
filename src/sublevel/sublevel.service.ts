import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Isublevel } from './sublevel.model';
import { SublevelDto } from './sublevel.DTO';

@Injectable()
export class SublevelService {

    constructor(@InjectModel('Sublevel') private sublevelModel: Model<Isublevel>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de SubNiveles'
    }
    //CRUD Usuarios
    //Crear Usuario
    async CreateSublevel(sublevel: SublevelDto){
        const resultado = new this.sublevelModel(sublevel)
        return await resultado.save()
    }
    //Encontrar Usuarios
    async getAllSublevels() : Promise <Isublevel[]>{
        return await this.sublevelModel.find().exec()
    }
    //Borrar Usuario
    async deleteSublevel(id: string){
        const resultado = await this.sublevelModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Usuario
    async updateSublevel(id: string, sublevel: SublevelDto){
        const resultado = await this.sublevelModel.findByIdAndUpdate(id, sublevel)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
