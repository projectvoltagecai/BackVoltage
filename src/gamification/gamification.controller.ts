import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GamificationDto } from './gamification.DTO';
import { GamificationService } from './gamification.service';

@Controller('gamification')
export class GamificationController {

    constructor(private readonly gamificationService: GamificationService) {}
    
    @Get()
    gamificationHola(): string {
        return this.gamificationService.saludo()
    }
    
    @Post()
    async create(@Body() gamification: GamificationDto) {
        const result = await this.gamificationService.CreateGamification(gamification)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllGamifications() {
        return await this.gamificationService.getAllGamifications()
    }

    @Delete('/:id')
    async deleteGamification(@Param("id") id:string) {
        const result = await this.gamificationService.deleteGamification(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "La Gamificación no existe"}
    }

    @Patch('/:id')
    async updateGamification(@Param("id") id:string, @Body() gamification: GamificationDto) {
        const result = await this.gamificationService.updateGamification(id, gamification)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "La Gamificación no se pudo actualizar, no existe o no tiene permisos"}
    }
}
