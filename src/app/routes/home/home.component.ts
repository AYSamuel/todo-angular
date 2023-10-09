import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '@app/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, public tasksService: TasksService) {}

  goToCreateComponent() {
    this.router.navigate(['/create']);
  }

  complete(index: number) {
    this.tasksService.complete(index);
  }

  delete(index: number) {
    this.tasksService.delete(index);
  }
}
