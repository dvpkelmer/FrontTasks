import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiUseCases } from 'src/app/application/api/api.usecases';
import { UsersModel } from 'src/app/domain/api/models/users.model';



@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  assignUserForm!: FormGroup;
  title: string = '';
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AssignUserComponent>,
    private readonly _apiUseCases: ApiUseCases,   
  ) { }

  ngOnInit(): void {
    this.title = 'Asignar usuario a tarea';

    this.assignUserForm = this.fb.group({
      userId: ['', [Validators.required]],    
    });

    this.getUsers();
  }

  onSubmit(): void {
    if (this.assignUserForm.valid) {
      this.dialogRef.close({ data: this.assignUserForm.value });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getUsers(): void {
    this._apiUseCases.getAll()
      .then((response: UsersModel) => {
        this.users = response.filter(user => user.role.name === 'Empleado');
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }
}
