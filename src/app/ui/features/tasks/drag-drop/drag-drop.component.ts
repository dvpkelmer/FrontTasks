import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { TaskStatus } from 'src/app/shared/core/enums/tasks.enum';
import { Task } from 'src/app/domain/api/models/tasks.model';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class DragDropComponent {
  @Input() toAssign: Task[] = [];

  @Input() pending: Task[] = [];

  @Input() inProcess: Task[] = [];

  @Input() completed: Task[] = [];

  @Input() enabledToassign: boolean = true;

  @Output() clickEvent = new EventEmitter();

  @Output() clickEventOpenModal = new EventEmitter();

  stateTasks = TaskStatus;

  drop(event: CdkDragDrop<Task[]>, state: string) {
    if (event.previousContainer === event.container) {
    } else {
      const assignedId = event.previousContainer.data[event.previousIndex].assignedId;
      if (assignedId != null) {
        this.clickEvent.emit({ event, state });
      }
    }
  }

  openModalAssign(task: Task) {
    this.clickEventOpenModal.emit(task);
  }
}
