import {  TokenResponseModel } from "src/app/domain/auth/models/token.model";

export interface IAuthAdapter {
    login(email: string, password: string): Promise<TokenResponseModel>;    
}
