import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string;

  updateUserTasks(name: string){
    this.name = name;
  }
}
