import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, UsuariosComponent],
  template: `<app-usuarios></app-usuarios>`
})
export class AppComponent { }