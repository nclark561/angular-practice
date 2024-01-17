import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'home',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  pokemon: string;
  getPokemon: any;
  
  ngOnInit(): void {
    this.getPokemon();
  }

  constructor() {
    this.pokemon = ''
    this.getPokemon = async () => {
      try {
        const res = await fetch('/api/pokemon');
        const data = await res.json()
        this.pokemon = data.pokemon
        return;
      } catch (err) {
        console.error(err)
        return 'error';
      }
    };
  }
}
