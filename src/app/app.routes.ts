import { Routes } from '@angular/router';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { LoginComponent } from './component/login/login.component';


export const routes: Routes = [
    
    {
        path : "usuario/:id",
        component : UsuarioComponent
    },

    {
        path : "usuarios",
        component : UsuariosComponent
    },

    {
        path : 'registro',
        component : UsuarioComponent
    },

    {
        path : '',
        component : LoginComponent
    }
    
];

