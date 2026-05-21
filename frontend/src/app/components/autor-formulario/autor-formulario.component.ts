import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autor-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './autor-formulario.component.html',
  styleUrls: ['./autor-formulario.component.css']
})
export class AutorFormularioComponent {
  private fb = inject(FormBuilder);
  private autorService = inject(AutorService);
  private router = inject(Router);

  public autorForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    nacionalidad: ['', [Validators.required]]
  });

  public enviarDatos(): void {
    if (this.autorForm.valid) {
      const nuevoAutor = {
        nombre: this.autorForm.value.nombre ?? '',
        nacionalidad: this.autorForm.value.nacionalidad ?? '',
      };
      this.autorService.crearAutor(nuevoAutor).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Error al guardar:', err)
      });
    }
  }
}
