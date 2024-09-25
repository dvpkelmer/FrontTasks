import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';


interface Task {
  name: string;
  description: string;
  assignedTo: string;
}
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'], 
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class DragDropComponent {
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
}
