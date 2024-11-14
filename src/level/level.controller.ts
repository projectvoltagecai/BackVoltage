import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LevelDto } from './level.DTO';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {

    constructor(private readonly levelService: LevelService) {}
    
    @Get()
    levelHola(): string {
        return this.levelService.saludo()
    }
    
    @Post()
    async create(@Body() level: LevelDto) {
        const result = await this.levelService.CreateLevel(level)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllLevels() {
        return await this.levelService.getAllLevels()
    }

    @Delete('/:id')
    async deleteLevel(@Param("id") id:string) {
        const result = await this.levelService.deleteLevel(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Nivel no existe"}
    }

    @Patch('/:id')
    async updateLevel(@Param("id") id:string, @Body() level: LevelDto) {
        const result = await this.levelService.updateLevel(id, level)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Nivel no se pudo actualizar, no existe o no tiene permisos"}
    }
}
