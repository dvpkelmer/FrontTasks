import { Role } from "./roles.model"

export type UsersModel = User[]

export interface User {
  id: number
  userName: string
  password: any
  email: string
  roleId: number
  role: Role
}
