import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iskills } from './skills.model';
import { SkillsDto } from './skills.DTO';

@Injectable()
export class SkillsService {

    constructor(@InjectModel('Skills') private skillsModel: Model<Iskills>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de las habilidades'
    }
    //CRUD Skills
    //Crear Skill
    async CreateSkills(skills: SkillsDto){
        const resultado = new this.skillsModel(skills)
        return await resultado.save()
    }
    //Encontrar Skills
    async getAllSkillss() : Promise <Iskills[]>{
        return await this.skillsModel.find().exec()
    }
    //Borrar Skill
    async deleteSkills(id: string){
        const resultado = await this.skillsModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Skill
    async updateSkills(id: string, skills: SkillsDto){
        const resultado = await this.skillsModel.findByIdAndUpdate(id, skills)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
