import { Component } from '@angular/core';
import { TasksService } from '@app/tasks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(public tasksService: TasksService) {}

  //define a tasks array that stores all the tasks that will be created and initialize it to an empty array.
  tasks: any = [];
  taskTitle: string = '';
  description: string = '';
  dueTime: any = null;
  dueDate: any = null;

  createTask() {
    if (
      this.taskTitle.trim() === '' ||
      this.description.trim() === '' ||
      this.dueDate.trim() === '' ||
      this.dueTime.trim() === ''
    ) {
      return;
    } //checks if the form is empty. if it is, it returns, preventing the addition of an empty task into the array.
    else {
      //else, we want to make a new object that stores all the values of each input and then push it into the tasks array.
      const task = {
        taskTitle: this.taskTitle,
        description: this.description,
        dueDate: this.dueDate,
        dueTime: this.dueTime,
      };

      this.tasksService.addTask(task); //push the new object into the todos array.
      //clear the input fields, ready for another task
      this.taskTitle = '';
      this.description = '';
      this.dueDate = null;
      this.dueTime = null;
      console.log(this.tasks);
    }
  }

  complete(index: number) {
    this.tasksService.complete(index);
  }

  delete(index: number) {
    this.tasksService.delete(index);
  }
}
