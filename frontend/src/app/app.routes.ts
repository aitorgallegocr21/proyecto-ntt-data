import { Routes } from '@angular/router';
import { AutorListaComponent } from './components/autor-lista/autor-lista.component';
import { AutorDetalleComponent } from './components/autor-detalle/autor-detalle.component';
import { AutorFormularioComponent } from './components/autor-formulario/autor-formulario.component';

export const routes: Routes = [
  // Ruta por defecto → lista de autores
  { path: '', redirectTo: 'autores', pathMatch: 'full' },

  // Lista de todos los autores
  { path: 'autores', component: AutorListaComponent },

  // Formulario para crear un nuevo autor
  { path: 'autores/nuevo', component: AutorFormularioComponent },

  // Detalle de un autor por ID
  { path: 'autores/:id', component: AutorDetalleComponent },

  // Formulario para editar un autor existente
  { path: 'autores/:id/editar', component: AutorFormularioComponent },

  // Cualquier ruta no encontrada → redirige a la lista
  { path: '**', redirectTo: 'autores' }
];