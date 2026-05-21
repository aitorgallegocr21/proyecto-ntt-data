import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AutorService } from '../../services/autor.service';
// Importamos la interfaz para tipar el Signal explícitamente
import { Autor } from '../../models/biblioteca.model';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-libro-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './libro-formulario.component.html',
  styleUrls: ['./libro-formulario.component.css']
})
export class LibroFormularioComponent {
  private fb = inject(FormBuilder);
  private autorService = inject(AutorService);
  private router = inject(Router);


  public autores: Signal<Autor[]> = toSignal(this.autorService.getAutores(), { initialValue: [] });

  // Configuración del Formulario Reactivo con tipos definidos para evitar conflictos en la plantilla
  public libroForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(2)]],
    isbn: ['', [Validators.required, Validators.pattern(/^[0-9xX-]{10,17}$/)]],
    anio: [new Date().getFullYear(), [Validators.required, Validators.min(0)]], // Campo numérico
    genero: ['', [Validators.required]],
    autorId: ['', [Validators.required]]
  });

  public enviarDatos(): void {
    if (this.libroForm.valid) {
      const datosForm = this.libroForm.value;

      const nuevoLibro = {
        titulo: datosForm.titulo ?? '',
        isbn: datosForm.isbn ?? '',
        anio: Number(datosForm.anio),
        genero: datosForm.genero ?? '',
        autor: { id: Number(datosForm.autorId) }
      };

      this.autorService.crearLibro(nuevoLibro).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al registrar el libro:', err)
      });
    }
  }
}
