import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'todo-item',
    imports: [ CommonModule ],
    templateUrl: './item.component.html',
    styleUrl: './item.component.css'
})
export class TodoItemComponent {
    title = 'todo item'
    @Input () todo: string = ''
}