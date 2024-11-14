import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TagDto } from './tag.DTO';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {

    constructor(private readonly tagService: TagService) {}
    
    @Get()
    tagHola(): string {
        return this.tagService.saludo()
    }
    
    @Post()
    async create(@Body() tag: TagDto) {
        const result = await this.tagService.CreateTag(tag)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllTags() {
        return await this.tagService.getAllTags()
    }

    @Delete('/:id')
    async deleteTag(@Param("id") id:string) {
        const result = await this.tagService.deleteTag(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Tag no existe"}
    }

    @Patch('/:id')
    async updateTag(@Param("id") id:string, @Body() tag: TagDto) {
        const result = await this.tagService.updateTag(id, tag)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Tag no se pudo actualizar, no existe o no tiene permisos"}
    }
}
