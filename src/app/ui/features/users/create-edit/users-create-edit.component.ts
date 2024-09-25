import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiUseCases } from 'src/app/application/api/api.usecases';
import { RoleModel } from 'src/app/domain/api/models/roles.model';
import { User } from 'src/app/domain/api/models/users.model';

export interface UserFormData {
  isEditMode: boolean;
  user: User;
}

@Component({
  selector: 'app-users-create-edit',
  templateUrl: './users-create-edit.component.html',
  styleUrls: ['./users-create-edit.component.scss']
})
export class UsersCreateEditComponent implements OnInit {
  userForm!: FormGroup;
  title: string = '';
  roles: any[] = []; // Aquí almacenaremos los roles disponibles

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UsersCreateEditComponent>,
    private readonly _apiUseCases: ApiUseCases,
    @Inject(MAT_DIALOG_DATA) public data: UserFormData
  ) { }

  ngOnInit(): void {
    this.title = this.data.isEditMode ? 'Editar Usuario' : 'Crear Usuario';

    this.userForm = this.fb.group({
      userName: [this.data.user?.userName || '', [Validators.required]],
      email: [this.data.user?.email || '', [Validators.required, Validators.email]],
      roleId: ['', Validators.required],
      password: [this.data.user?.password || '',
      this.data.isEditMode ? [] : [Validators.required, Validators.minLength(6)]]
    });

    this.getRoles();

    if (this.data.isEditMode) {
      this.loadUserData();
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {      
      this.dialogRef.close({data : this.userForm.value, id : this.data.user.id});
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getRoles(): void {
    this._apiUseCases.getAllRoles().then((response: RoleModel) => {
      this.roles = response;
    }).catch((error) => {

    });
  }

  loadUserData(): void {
    const user = this.data.user;
    this.userForm.patchValue({
      userName: user.userName,
      email: user.email,
      roleId: user.role.id
    });

    // Si no se permite cambiar la contraseña en la edición, puedes omitir este campo
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.updateValueAndValidity();
  }


}
