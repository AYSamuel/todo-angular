import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  //define a todos array that stores all the todos that will be created and initialize it to an empty array.
  todos: any = [];
  todoTitle: string = '';
  description: string = '';
  dueTime: any = null;
  dueDate: any = null;

  createTodo() {
    if (
      this.todoTitle.trim() === '' ||
      this.description.trim() === '' ||
      this.dueDate.trim() === '' ||
      this.dueTime.trim() === ''
    ) {
      return;
    } //checks if the form is empty. if it is, it returns, preventing the addition of an empty todo into the array.
    else {
      //else, we want to make a new object that stores all the values of each input and then push it into the todos array.
      const todo = {
        todoTitle: this.todoTitle,
        description: this.description,
        dueDate: this.dueDate,
        dueTime: this.dueTime,
      };

      this.todos.push(todo); //push the new object into the todos array.
      //clear the input fields, ready for another task
      this.todoTitle = '';
      this.description = '';
      this.dueDate = null;
      this.dueTime = null;
    }
  }

  completed: any = [];
  complete(index: number) {
    const completedTodo = this.todos[index];
    this.completed.push(completedTodo);
    console.log(this.completed);
    this.todos.splice(index, 1);
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }
}
