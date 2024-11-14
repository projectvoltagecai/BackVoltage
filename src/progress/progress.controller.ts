import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProgressDto } from './progress.DTO';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {

    constructor(private readonly progressService: ProgressService) {}
    
    @Get()
    progressHola(): string {
        return this.progressService.saludo()
    }
    
    @Post()
    async create(@Body() progress: ProgressDto) {
        const result = await this.progressService.CreateProgress(progress)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllProgresss() {
        return await this.progressService.getAllProgresss()
    }

    @Delete('/:id')
    async deleteProgress(@Param("id") id:string) {
        const result = await this.progressService.deleteProgress(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Progreso no existe"}
    }

    @Patch('/:id')
    async updateProgress(@Param("id") id:string, @Body() progress: ProgressDto) {
        const result = await this.progressService.updateProgress(id, progress)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Progreso no se pudo actualizar, no existe o no tiene permisos"}
    }
}
