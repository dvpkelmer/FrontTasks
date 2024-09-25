import { TokenResponseModel } from "../models/token.model";

export abstract class AuthRepository {
    abstract login(email: string, password: string) : Promise<TokenResponseModel>;   
}
