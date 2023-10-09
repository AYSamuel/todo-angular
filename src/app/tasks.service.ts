import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: any[] = [];
  completedTasks: any[] = [];

  addTask(task: any) {
    this.tasks.push(task);
  }

  addCompletedTask(completedTask: any) {
    this.completedTasks.push(completedTask);
  }

  complete(index: number) {
    const completedTask = this.tasks[index];
    this.addCompletedTask(completedTask);
    console.log(this.completedTasks);
    this.tasks.splice(index, 1);
  }

  delete(index: number) {
    this.tasks.splice(index, 1);
  }
}
