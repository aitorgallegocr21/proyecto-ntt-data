import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- Importación obligatoria

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css' // O el archivo de estilos correspondiente
})
export class AppComponent {
  title = 'frontend';
}
