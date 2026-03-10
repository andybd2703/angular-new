import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario { id: number; nombre: string; correo: string; }

@Component({
  standalone: true,
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  private nextId = 1;                    // counter for automatic IDs
  editingUsuario: Usuario | null = null; // currently edited user

  // form model doesn't carry the id; we set it ourselves
  nuevoUsuario: Omit<Usuario,'id'> = { nombre: '', correo: '' };

  agregar(): void {
    if (this.editingUsuario) {
      // update existing user
      const idx = this.usuarios.findIndex(u => u.id === this.editingUsuario!.id);
      if (idx > -1) {
        this.usuarios[idx] = { ...this.nuevoUsuario, id: this.editingUsuario.id };
      }
      this.editingUsuario = null;
    } else {
      // create new user with auto‑generated id
      this.usuarios.push({ ...this.nuevoUsuario, id: this.nextId++ });
    }
    // reset form
    this.nuevoUsuario = { nombre: '', correo: '' };
  }

  eliminar(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    // if we were editing this user, cancel edit
    if (this.editingUsuario?.id === id) {
      this.cancelEdit();
    }
  }

  startEdit(usuario: Usuario): void {
    this.editingUsuario = { ...usuario };
    this.nuevoUsuario = { nombre: usuario.nombre, correo: usuario.correo };
  }

  cancelEdit(): void {
    this.editingUsuario = null;
    this.nuevoUsuario = { nombre: '', correo: '' };
  }
}