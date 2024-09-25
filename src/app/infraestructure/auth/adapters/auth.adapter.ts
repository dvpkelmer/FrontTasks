import { inject, Injectable } from '@angular/core';
import { IAuthAdapter } from './auth.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environement';
import { TokenResponseModel } from 'src/app/domain/auth/models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthAdapter implements IAuthAdapter {
  private readonly _http$ = inject(HttpClient);
  constructor() {
  }

  async login(email: string, password: string): Promise<TokenResponseModel> {
    return new Promise<TokenResponseModel>((resolve, reject) => {
      this._http$
        .post<TokenResponseModel>(environment.apiUrl + '/user/login', { email, password })
        .subscribe({
          next: (res: TokenResponseModel) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

}
