import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iuser } from './user.model';
import { UserDto } from './user.DTO';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<Iuser>) {}

    saludo(): string {
        return 'Hola! Esta es la Ruta de la API de Usuarios'
    }
    //CRUD Usuarios
    //Crear Usuario
    async CreateUser(user: UserDto){
        const resultado = new this.userModel(user)
        return await resultado.save()
    }
    //Encontrar Usuarios
    async getAllUsers() : Promise <Iuser[]>{
        return await this.userModel.find().exec()
    }
    //Borrar Usuario
    async deleteUser(id: string){
        const resultado = await this.userModel.findByIdAndDelete(id)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
    //Actualizar Usuario
    async updateUser(id: string, user: UserDto){
        const resultado = await this.userModel.findByIdAndUpdate(id, user)
        if(resultado!=null){
            return {ok: true, result: resultado}
        }
        return {ok: false, result: null}
    }
}
