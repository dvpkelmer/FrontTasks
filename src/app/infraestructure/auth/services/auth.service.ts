import { Injectable } from '@angular/core';
import { AuthRepository } from 'src/app/domain/auth/resporitory/auth.repository';
import { TokenResponseModel } from 'src/app/domain/auth/models/token.model';
import { AuthAdapter } from '../adapters/auth.adapter';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthRepository {

  constructor(private readonly _authAdapter: AuthAdapter,
  ) {
    super();
  }

  async login(email: string, password: string): Promise<TokenResponseModel> {
    return this._authAdapter.login(email, password);
  }

}
