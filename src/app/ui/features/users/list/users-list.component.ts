import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User, UsersModel } from 'src/app/domain/api/models/users.model';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../detail/users-detail.component';
import { UsersCreateEditComponent } from '../create-edit/users-create-edit.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/modal-confirm-dialog/modal-confirm-dialog.component';
import { ApiUseCases } from 'src/app/application/api/api.usecases';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = new MatTableDataSource<any>();

  constructor(private readonly _apiUseCases: ApiUseCases, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._apiUseCases.getAll().then((response: UsersModel) => {
      this.users.data = response;
    }).catch(() => {

    });
  }

  openViewUserDialog(user: User): void {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(UsersCreateEditComponent, {
      width: 'auto',
      maxHeight: '95vh',
      data: {
        isEditMode: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apiUseCases.createUser(result.data).then((response: any) => {
          this.getUsers();
        }).catch((error) => {
          this.getUsers();
        });
      }
    });
  }

  openEditUserDialog(user: any): void {
    const dialogRef = this.dialog.open(UsersCreateEditComponent, {
      width: 'auto',
      maxHeight: '95vh',
      data: {
        isEditMode: true,
        user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apiUseCases.updateUser(result.data, result.id).then((response: any) => {
          this.getUsers();
        }).catch((error) => {
          this.getUsers();
        });
      }
    });
  }

  deleteUser(userId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apiUseCases.deleteUser(userId).then((response: any) => {
          this.getUsers();
        }).catch((error) => {
          this.getUsers();
        });
      }
    });
  }
}
