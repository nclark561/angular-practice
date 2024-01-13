import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'pnf',
    imports: [ CommonModule, RouterOutlet ],
    templateUrl: './pnf.component.html',
    styleUrl: './pnf.component.css'
})
export class PageNotFoundComponent {
    title = 'Page not found'
}