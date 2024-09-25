import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ApiUseCases } from 'src/app/application/api/api.usecases';
import { UsersModel } from 'src/app/domain/api/models/users.model';


interface Task {
  name: string;
  description: string;
  assignedTo: string;
}
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-tasks-list.component',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class TasksListComponent {
  todo: Task[] = [
    { name: 'Tarea 1', description: 'Descripción de la tarea 1', assignedTo: 'Usuario A' },
    { name: 'Tarea 2', description: 'Descripción de la tarea 2', assignedTo: 'Usuario B' },
    { name: 'Tarea 3', description: 'Descripción de la tarea 3', assignedTo: 'Usuario C' }
  ];

  inProcess: Task[] = [
    { name: 'Tarea 4', description: 'Descripción de la tarea 4', assignedTo: 'Usuario D' }
  ];

  done: Task[] = [
    { name: 'Tarea 5', description: 'Descripción de la tarea 5', assignedTo: 'Usuario E' },
    { name: 'Tarea 6', description: 'Descripción de la tarea 6', assignedTo: 'Usuario F' }
  ];
  users: any[] = [];

  constructor(private readonly _apiUseCases: ApiUseCases, private dialog: MatDialog) {
    this.getUsers();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getUsers(): void {
    this._apiUseCases.getAll().then((response: UsersModel) => {
      this.users = response;
    }).catch(() => {

    });
  }
}
