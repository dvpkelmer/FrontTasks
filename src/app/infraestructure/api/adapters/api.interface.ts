import { RoleModel } from "src/app/domain/api/models/roles.model";
import { User, UsersModel } from "src/app/domain/api/models/users.model";

export interface IApiAdapter {
    getAll(): Promise<UsersModel>;  
    getAllRoles(): Promise<RoleModel>; 
    createUser(payload : User): Promise<any>;
    updateUser(payload : User, id : number): Promise<any>;
    deleteUser(id : number): Promise<any>;
}
