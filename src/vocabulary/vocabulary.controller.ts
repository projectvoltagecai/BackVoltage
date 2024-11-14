import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VocabularyDto } from './vocabulary.DTO';
import { VocabularyService } from './vocabulary.service';

@Controller('vocabulary')
export class VocabularyController {

    constructor(private readonly vocabularyService: VocabularyService) {}
    
    @Get()
    vocabularyHola(): string {
        return this.vocabularyService.saludo()
    }
    
    @Post()
    async create(@Body() vocabulary: VocabularyDto) {
        const result = await this.vocabularyService.CreateVocabulary(vocabulary)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllVocabularys() {
        return await this.vocabularyService.getAllVocabularys()
    }

    @Delete('/:id')
    async deleteVocabulary(@Param("id") id:string) {
        const result = await this.vocabularyService.deleteVocabulary(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Vocabulario no existe"}
    }

    @Patch('/:id')
    async updateVocabulary(@Param("id") id:string, @Body() vocabulary: VocabularyDto) {
        const result = await this.vocabularyService.updateVocabulary(id, vocabulary)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Vocabulario no se pudo actualizar, no existe o no tiene permisos"}
    }
}
