import { Injectable } from "@angular/core";
import { RoleModel } from "src/app/domain/api/models/roles.model";
import { User } from "src/app/domain/api/models/users.model";
import { ApiRepository } from "src/app/domain/api/resporitory/api.repository";

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
   
}