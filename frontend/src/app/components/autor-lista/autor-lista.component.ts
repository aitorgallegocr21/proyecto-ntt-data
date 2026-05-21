import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autor-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './autor-lista.component.html'
})
export class AutorListaComponent {
  // Inyección del servicio HTTP encargado de la comunicación con la API REST
  private autorService = inject(AutorService);

  /**
   * REQUISITO TECNICO NTT DATA: Conversión de Observable RxJS a Signal nativo.
   * La función toSignal suscribe automáticamente el componente al flujo HTTP
   * y expone un Signal de lectura (readonly) inicializado por defecto como un array vacío.
   */
  public autores = toSignal(this.autorService.getAutores(), { initialValue: [] });
}
