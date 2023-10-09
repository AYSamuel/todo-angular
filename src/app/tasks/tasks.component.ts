import { Component } from '@angular/core';
import { TasksService } from '@app/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(public tasksService: TasksService) {}

  complete(index: number) {
    this.tasksService.complete(index);
  }

  delete(index: number) {
    this.tasksService.delete(index);
  }
}
