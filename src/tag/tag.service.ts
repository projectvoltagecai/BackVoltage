import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itag } from './tag.model';
import { TagDto } from './tag.DTO';

@Injectable()
export class TagService {

    constructor(@InjectModel('Tag') private tagModel: Model<Itag>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Tags'
    }
    //CRUD Tags
    //Crear Tag
    async CreateTag(tag: TagDto){
        const resultado = new this.tagModel(tag)
        return await resultado.save()
    }
    //Encontrar Tags
    async getAllTags() : Promise <Itag[]>{
        return await this.tagModel.find().exec()
    }
    //Borrar Tag
    async deleteTag(id: string){
        const resultado = await this.tagModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Tag
    async updateTag(id: string, tag: TagDto){
        const resultado = await this.tagModel.findByIdAndUpdate(id, tag)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
