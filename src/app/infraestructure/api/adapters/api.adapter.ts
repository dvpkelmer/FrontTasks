import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environement';
import { User, UsersModel } from 'src/app/domain/api/models/users.model';
import { RoleModel } from 'src/app/domain/api/models/roles.model';
import { IApiAdapter } from './api.interface';
import { Task } from 'src/app/domain/api/models/tasks.model';
import { TasksResponseType } from 'src/app/shared/core/interfaces/tasks-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiAdapter implements IApiAdapter {
  private readonly _http$ = inject(HttpClient);
  constructor() {
  }

  async getAll(): Promise<UsersModel> {
    return new Promise<UsersModel>((resolve, reject) => {
      this._http$
        .get<UsersModel>(environment.apiUrl + '/user')
        .subscribe({
          next: (res: UsersModel) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async getAllRoles(): Promise<RoleModel> {
    return new Promise<RoleModel>((resolve, reject) => {
      this._http$
        .get<RoleModel>(environment.apiUrl + '/role')
        .subscribe({
          next: (res: RoleModel) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async createUser(payload : User): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http$
        .post<any>(environment.apiUrl + '/user', payload)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async updateUser(payload : User, id : number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http$
        .put<any>(environment.apiUrl + `/user/${id}`, payload)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async deleteUser(id : number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http$
        .delete<any>(environment.apiUrl + `/user/${id}`)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }


  async createTask(payload : Task): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http$
        .post<any>(environment.apiUrl + '/tasks', payload)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async getAllTasks(): Promise<TasksResponseType> {
    return new Promise<TasksResponseType>((resolve, reject) => {
      this._http$
        .get<TasksResponseType>(environment.apiUrl + '/tasks')
        .subscribe({
          next: (res: TasksResponseType) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  async updateTasks(payload : any, id : number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._http$
        .put<any>(environment.apiUrl + `/tasks/${id}`, payload)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

}
