import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SkillsDto } from './skills.DTO';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {

    constructor(private readonly skillsService: SkillsService) {}
    
    @Get()
    skillsHola(): string {
        return this.skillsService.saludo()
    }
    
    @Post()
    async create(@Body() skills: SkillsDto) {
        const result = await this.skillsService.CreateSkills(skills)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllSkillss() {
        return await this.skillsService.getAllSkillss()
    }

    @Delete('/:id')
    async deleteSkills(@Param("id") id:string) {
        const result = await this.skillsService.deleteSkills(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "La Habilidad no existe"}
    }

    @Patch('/:id')
    async updateSkills(@Param("id") id:string, @Body() skills: SkillsDto) {
        const result = await this.skillsService.updateSkills(id, skills)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "La Habilidad no se pudo actualizar, no existe o no tiene permisos"}
    }
}
