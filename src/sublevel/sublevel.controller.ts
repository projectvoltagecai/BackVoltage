import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SublevelDto } from './sublevel.DTO';
import { SublevelService } from './sublevel.service';

@Controller('sublevel')
export class SublevelController {

    constructor(private readonly sublevelService: SublevelService) {}
    
    @Get()
    sublevelHola(): string {
        return this.sublevelService.saludo()
    }
    
    @Post()
    async create(@Body() sublevel: SublevelDto) {
        const result = await this.sublevelService.CreateSublevel(sublevel)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllSublevels() {
        return await this.sublevelService.getAllSublevels()
    }

    @Delete('/:id')
    async deleteSublevel(@Param("id") id:string) {
        const result = await this.sublevelService.deleteSublevel(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El SubNivel no existe"}
    }

    @Patch('/:id')
    async updateSublevel(@Param("id") id:string, @Body() sublevel: SublevelDto) {
        const result = await this.sublevelService.updateSublevel(id, sublevel)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El SubNivel no se pudo actualizar, no existe o no tiene permisos"}
    }
}
