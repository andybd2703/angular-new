import { Component } from '@angular/core';

interface Usuario { id: number; nombre: string; correo: string; }

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { id: 0, nombre: '', correo: '' };

  agregar(): void {
    this.usuarios.push({ ...this.nuevoUsuario });
    this.nuevoUsuario = { id: 0, nombre: '', correo: '' };
  }

  eliminar(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
}