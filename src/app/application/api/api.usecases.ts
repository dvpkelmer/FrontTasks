import { Injectable } from "@angular/core";
import { RoleModel } from "src/app/domain/api/models/roles.model";
import { Task } from "src/app/domain/api/models/tasks.model";
import { User } from "src/app/domain/api/models/users.model";
import { ApiRepository } from "src/app/domain/api/resporitory/api.repository";
import { TasksResponseType } from "src/app/shared/core/interfaces/tasks-response.interface";

@Injectable({
    providedIn: 'root'
})

export class ApiUseCases {

    constructor(private _apiRepository: ApiRepository) { }

    getAll(): Promise<any> {
        return this._apiRepository.getAll();
    }

    getAllRoles(): Promise<RoleModel> {
        return this._apiRepository.getAllRole();
    }

    createUser(payload : User): Promise<any> {
        return this._apiRepository.createUser(payload);
    }

    updateUser(payload : User, id : number): Promise<any> {
        return this._apiRepository.updateUser(payload, id);
    }

    deleteUser(id : number): Promise<any> {
        return this._apiRepository.deleteUser(id);
    }

    createTask(payload : Task): Promise<any> {
        return this._apiRepository.createTask(payload);
    }

    getAllTasks(): Promise<TasksResponseType> {
        return this._apiRepository.getAllTasks();
    }

    updateTasks(payload : any, id : number): Promise<any> {
        return this._apiRepository.updateTasks(payload, id);
    }
   
}