import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario { id: number; nombre: string; correo: string; }

@Component({
  standalone: true,
  selector: 'app-usuarios',
  imports: [FormsModule],
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