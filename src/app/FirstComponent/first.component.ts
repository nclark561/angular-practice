import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component ({
    standalone: true,
    selector: 'first-component',
    templateUrl: "./first.component.html",
    styleUrl: './first.component.css',
    imports: [ CommonModule, RouterOutlet ],
})
export class FirstComponent {
    title = 'First Page'
}