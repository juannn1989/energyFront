import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuariosService } from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'energyFront';

  isAuthenticated : boolean = false;

  constructor (
    private authService: UsuariosService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated=> {
      this.isAuthenticated = isAuthenticated;
    });
  }
  
}
