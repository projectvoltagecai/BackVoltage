import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChallengeDto } from './challenge.DTO';
import { ChallengeService } from './challenge.service';

@Controller('challenge')
export class ChallengeController {

    constructor(private readonly challengeService: ChallengeService) {}

    @Get()
    challengeHola(): string {
        return this.challengeService.saludo()
    }

    @Post()
    async create(@Body() challenge: ChallengeDto) {
        const result = await this.challengeService.CreateChallenge(challenge)
        return {ok: true, result};
    }

    @Get('all')
    async getAllChallenges() {
        return await this.challengeService.getAllChallenges()
    }

    @Delete('/:id')
    async deleteChallenge(@Param("id") id:string) {
        const result = await this.challengeService.deleteChallenge(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Challenge no existe"}
    }

    @Patch('/:id')
    async updateChallenge(@Param("id") id:string, @Body() challenge: ChallengeDto) {
        const result = await this.challengeService.updateChallenge(id, challenge)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Challenge no se pudo actualizar, no existe o no tiene permisos"}
    }
}
