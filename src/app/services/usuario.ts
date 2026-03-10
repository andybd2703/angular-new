import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarios: Usuario[] = [
    {id: 1, nombre: 'Andres', correo: 'yeison.andres2006.yb@gmail.com'},
    {id: 2, nombre: 'Laura', correo: 'laura@gmail.com'}
  ];


  obtenerUsuarios(){
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario){
    this.usuarios.push(usuario);
  }

  eliminarUsuario(usuario: Usuario){
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
  }

  actualizarUsuario(usuario: Usuario){
    const index = this.usuarios.findIndex( u => u.id === usuario.id);
    this.usuarios[index] = usuario;
  }
}
