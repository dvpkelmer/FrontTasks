export type TasksResponseType = TaskResponseInterface[]

export interface TaskResponseInterface {
  status: string
  tasks: Task[]
}

export interface Task {
  id: number
  name: string
  description: string
  status: string
  assignedId: any
  createdById: number
  assignedUserName? : string
}
