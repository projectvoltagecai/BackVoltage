import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GapDto } from './gap.DTO';
import { GapService } from './gap.service';

@Controller('gap')
export class GapController {

    constructor(private readonly gapService: GapService) {}
    
    @Get()
    gapHola(): string {
        return this.gapService.saludo()
    }
    
    @Post()
    async create(@Body() gap: GapDto) {
        const result = await this.gapService.CreateGap(gap)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllGaps() {
        return await this.gapService.getAllGaps()
    }

    @Delete('/:id')
    async deleteGap(@Param("id") id:string) {
        const result = await this.gapService.deleteGap(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Gap no existe"}
    }

    @Patch('/:id')
    async updateGap(@Param("id") id:string, @Body() gap: GapDto) {
        const result = await this.gapService.updateGap(id, gap)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Gap no se pudo actualizar, no existe o no tiene permisos"}
    }
}
