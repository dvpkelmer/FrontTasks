import { Injectable } from '@angular/core';
import { User, UsersModel } from 'src/app/domain/api/models/users.model';
import { RoleModel } from 'src/app/domain/api/models/roles.model';
import { ApiAdapter } from '../adapters/api.adapter';
import { ApiRepository } from 'src/app/domain/api/resporitory/api.repository';
import { Task } from 'src/app/domain/api/models/tasks.model';
import { TasksResponseType } from 'src/app/shared/core/interfaces/tasks-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends ApiRepository {

  constructor(private readonly _apiAdapter: ApiAdapter,
  ) {
    super();
  }

  async getAll(): Promise<UsersModel> {
    return this._apiAdapter.getAll();
  }

  override getAllRole(): Promise<RoleModel> {
    return this._apiAdapter.getAllRoles();
  }

  override createUser(payload: User): Promise<any> {
    return this._apiAdapter.createUser(payload);
  }

  override updateUser(payload: User, id: number): Promise<any> {
    return this._apiAdapter.updateUser(payload, id);
  }

  override deleteUser(id: number): Promise<any> {
    return this._apiAdapter.deleteUser(id);
  }

  override createTask(payload: Task): Promise<any> {
    return this._apiAdapter.createTask(payload);
  }

  override getAllTasks(): Promise<TasksResponseType> {
    return this._apiAdapter.getAllTasks();
  }

  override updateTasks(payload: any, id: number): Promise<any> {
    return this._apiAdapter.updateTasks(payload, id);
  }

}
