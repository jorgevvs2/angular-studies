import { Injectable } from "@angular/core";
import { NewTask } from "../new-task/new-task.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = [
        {
          id:"t1",
          userId: "u1",
          title: 'Task 1',
          summary: 'Description 1',
          dueDate: '2021-07-01'
        },
        {
          id:"t2",
          userId: "u1",
          title: 'Task 2',
          summary: 'Description 2',
          dueDate: '2021-07-02'
        }
      ]

    getUserTasks(userId: string){
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTask, userId: string){
        this.tasks.push({
            id: uuidv4(),
            userId: userId!,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        });
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}