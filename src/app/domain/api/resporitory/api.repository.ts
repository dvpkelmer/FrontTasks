import { RoleModel } from "../models/roles.model";
import { User, UsersModel } from "../models/users.model";

export abstract class ApiRepository {
    abstract getAll() : Promise<UsersModel>;   
    abstract getAllRole() : Promise<RoleModel>;  
    abstract createUser(payload : User): Promise<any>;
    abstract updateUser(payload : User, id : number): Promise<any>;
    abstract deleteUser(id : number): Promise<any>;

}

