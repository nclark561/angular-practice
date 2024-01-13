import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TodoItemComponent } from "../TodoItemComponent/item.component";

@Component({
    standalone: true,
    selector: 'todo-list',
    imports: [ CommonModule, ReactiveFormsModule, TodoItemComponent ],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css'
})
export class TodoListComponent {
    title = 'todo';
    todoItems: string[];
    onSubmit: any;
    todoForm = this.formBuilder.group({ addTodo: '' })
    remove: any
    
    constructor (private formBuilder: FormBuilder) {
        this.todoItems = [];
        this.onSubmit = (evt: Event) => {
            evt.preventDefault()
            console.log(this.todoForm.value.addTodo)
            if(typeof this.todoForm.value.addTodo === "string") {
                this.todoItems = [...this.todoItems, this.todoForm.value.addTodo]
            }
        }
        this.remove = (index: number) => this.todoItems.splice(index, 1)
    }
}