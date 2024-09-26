import { TasksResponseType } from "src/app/shared/core/interfaces/tasks-response.interface";
import { RoleModel } from "../models/roles.model";
import { Task } from "../models/tasks.model";
import { User, UsersModel } from "../models/users.model";

export abstract class ApiRepository {
    abstract getAll() : Promise<UsersModel>;   
    abstract getAllRole() : Promise<RoleModel>;  
    abstract createUser(payload : User): Promise<any>;
    abstract updateUser(payload : User, id : number): Promise<any>;
    abstract deleteUser(id : number): Promise<any>;

    //tasks
    abstract createTask(payload : Task): Promise<any>;
    abstract getAllTasks(): Promise<TasksResponseType>;
    abstract updateTasks(payload : any, id : number): Promise<any>;
}

