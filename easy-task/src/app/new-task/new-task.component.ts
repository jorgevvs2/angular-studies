import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId?: string;
  @Output() onClose = new EventEmitter();
  titleInput = '';
  summaryInput = '';
  dueDateInput = '';
  private tasksService = inject(TasksService);

  onCloseAddTask(){
    this.onClose.emit();
  }

  onSubmitTask(){
    this.tasksService.addTask( {
      title: this.titleInput,
      summary: this.summaryInput,
      dueDate: this.dueDateInput
    }, this.userId!);
    this.onClose.emit();
  }
}
