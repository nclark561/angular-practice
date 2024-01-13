import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'second-component',
    imports: [ CommonModule, RouterOutlet ],
    templateUrl: './second.component.html',
    styleUrl: './second.component.css'
}) 
export class SecondComponent {
    title = 'Second Page'
}