import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}
    
    @Get()
    userHola(): string {
        return this.userService.saludo()
    }
    
    @Post()
    async create(@Body() user: UserDto) {
        const result = await this.userService.CreateUser(user)
        return {ok: true, result};
    }
    
    @Get('all')
    async getAllUsers() {
        return await this.userService.getAllUsers()
    }

    @Delete('/:id')
    async deleteUser(@Param("id") id:string) {
        const result = await this.userService.deleteUser(id)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Usuario no existe"}
    }

    @Patch('/:id')
    async updateUser(@Param("id") id:string, @Body() user: UserDto) {
        const result = await this.userService.updateUser(id, user)
        if(result.ok){
            return {ok: true, result: result.result}
        }
        return {ok: false, mensaje: "El Usuario no se pudo actualizar, no existe o no tiene permisos"}
    }
}
