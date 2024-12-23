import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [AppComponent],
    imports: [TasksComponent,UserComponent, HeaderComponent, NewTaskComponent, TaskComponent, BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule{

}