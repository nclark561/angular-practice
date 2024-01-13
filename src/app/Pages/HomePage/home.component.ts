import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'home',
    imports: [ CommonModule, RouterOutlet ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'Home Page'
}