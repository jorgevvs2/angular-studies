import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTask } from '../new-task/new-task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId?: string;
  isAddingTask = false;
  constructor(private tasksService: TasksService) {
   }

  updateUserTasks(name: string){
    this.name = name;
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId!);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  
  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
