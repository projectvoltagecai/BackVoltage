import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ivocabulary } from './vocabulary.model';
import { VocabularyDto } from './vocabulary.DTO';

@Injectable()
export class VocabularyService {

    constructor(@InjectModel('Vocabulary') private vocabularyModel: Model<Ivocabulary>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Vocabularios'
    }
    //CRUD Vocabularies
    //Crear Vocabulary
    async CreateVocabulary(vocabulary: VocabularyDto){
        const resultado = new this.vocabularyModel(vocabulary)
        return await resultado.save()
    }
    //Encontrar Vocabularies
    async getAllVocabularys() : Promise <Ivocabulary[]>{
        return await this.vocabularyModel.find().exec()
    }
    //Borrar Vocabulary
    async deleteVocabulary(id: string){
        const resultado = await this.vocabularyModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Vocabulary
    async updateVocabulary(id: string, vocabulary: VocabularyDto){
        const resultado = await this.vocabularyModel.findByIdAndUpdate(id, vocabulary)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
