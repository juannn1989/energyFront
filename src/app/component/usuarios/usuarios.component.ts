import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuarios } from '../../clases/usuarios';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuario : Usuarios[] = []
  
  constructor (private userService:UsuariosService) {}

  ngOnInit(): void {
    this.listUsers();
    //throw new Error('Method not implemented.');
  }

  listUsers() {
    this.userService.getUserList().subscribe(
      data => {
        this.usuario = data;
        console.log(this.usuario);
      }
    )
  }


}
