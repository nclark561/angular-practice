import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

interface Todo {
    todoItem: string;
    todoItems: string[];
    index: number | undefined;
}

@Component({
    standalone: true,
    selector: 'todo-item',
    imports: [ CommonModule ],
    templateUrl: './item.component.html',
    styleUrl: './item.component.css'
})
export class TodoItemComponent {
    title = 'todo item'
    @Input () todo: Todo = { todoItem: '', todoItems: [], index: undefined } 
    remove: any

    constructor () {
        this.remove = (index: number) => {
            console.log(index)
            this.todo.todoItems.splice(index, 1)
        }
    }
}