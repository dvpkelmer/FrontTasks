import { RoleModel } from "src/app/domain/api/models/roles.model";
import { Task } from "src/app/domain/api/models/tasks.model";
import { User, UsersModel } from "src/app/domain/api/models/users.model";
import { TasksResponseType } from "src/app/shared/core/interfaces/tasks-response.interface";

export interface IApiAdapter {
    getAll(): Promise<UsersModel>;  
    getAllRoles(): Promise<RoleModel>; 
    createUser(payload : User): Promise<any>;
    updateUser(payload : User, id : number): Promise<any>;
    deleteUser(id : number): Promise<any>;

    //tasks
    createTask(payload : Task): Promise<any>
    getAllTasks(): Promise<TasksResponseType>;
    updateTasks(payload : any, id : number): Promise<any>;

}
