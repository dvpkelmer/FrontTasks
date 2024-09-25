import { Injectable } from "@angular/core";
import { TokenResponseModel } from "src/app/domain/auth/models/token.model";
import { AuthRepository } from "src/app/domain/auth/resporitory/auth.repository";

@Injectable({
    providedIn: 'root'
})

export class AuthUseCases {

    constructor(private _authRepository: AuthRepository) { }

    login(email: string, password: string): Promise<TokenResponseModel> {
        return this._authRepository.login(email, password);
    }
   
}