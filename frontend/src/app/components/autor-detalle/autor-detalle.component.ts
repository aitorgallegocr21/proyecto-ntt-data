import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AutorService } from '../../services/autor.service';
import { Autor } from '../../models/biblioteca.model';

@Component({
  selector: 'app-autor-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './autor-detalle.component.html'
})
export class AutorDetalleComponent implements OnInit { // Nombre unificado de la clase
  private route = inject(ActivatedRoute);
  private autorService = inject(AutorService);

  public autor = signal<Autor | null>(null);
  public cargando = signal<boolean>(true);

  // El ciclo de vida de Angular (ngOnInit) siempre debe retornar: void
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.autorService.getAutorById(+idParam).subscribe({
        next: (data) => {
          this.autor.set(data);
          this.cargando.set(false);
        },
        error: () => this.cargando.set(false)
      });
    }
  }
}
