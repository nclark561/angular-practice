import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'counter',
    imports: [ CommonModule ],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class CounterComponent {
    title = 'counter';
    number: number;
    increment: any;
    decrement: any;

    constructor () {
        this.number = 0;
        this.increment = () => this.number++;
        this.decrement = () => this.number--;
    }
}