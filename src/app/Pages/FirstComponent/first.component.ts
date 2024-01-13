import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TodoListComponent } from "../../Components/TodoListComponent/todo.component";

@Component ({
    standalone: true,
    selector: 'first-component',
    templateUrl: "./first.component.html",
    styleUrl: './first.component.css',
    imports: [ CommonModule, RouterOutlet, TodoListComponent ],
})
export class FirstComponent {
    title = 'First Page'
}