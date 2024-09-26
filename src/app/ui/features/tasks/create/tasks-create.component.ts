import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiUseCases } from 'src/app/application/api/api.usecases';
import { RoleModel } from 'src/app/domain/api/models/roles.model';
import { User, UsersModel } from 'src/app/domain/api/models/users.model';
import { TaskStatus } from 'src/app/shared/core/enums/tasks.enum';

export interface TaskFormData {
  name: string
  description: string
  status: string
  assignedId: number
}

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.scss']
})
export class TasksCreateComponent implements OnInit {
  taskForm!: FormGroup;
  title: string = '';
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TasksCreateComponent>,
    private readonly _apiUseCases: ApiUseCases,
    @Inject(MAT_DIALOG_DATA) public data: TaskFormData
  ) { }

  ngOnInit(): void {
    this.title = 'Crear Tarea';

    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: [TaskStatus.ToAssign],     
    });

    this.getUsers();
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close({ data: this.taskForm.value });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getUsers(): void {
    this._apiUseCases.getAll()
      .then((response: UsersModel) => {
        console.log(response);
        
        this.users = response.filter(user => user.role.name === 'Empleado');
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }



}
