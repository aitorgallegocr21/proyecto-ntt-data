import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Importación obligatoria

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css' // O el archivo de estilos correspondiente
})
export class AppComponent {
  title = 'frontend';
}
