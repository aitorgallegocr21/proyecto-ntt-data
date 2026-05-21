import { Routes } from '@angular/router';
import { AutorListaComponent } from './components/autor-lista/autor-lista.component';
import { AutorFormularioComponent } from './components/autor-formulario/autor-formulario.component';
import { AutorDetalleComponent } from './components/autor-detalle/autor-detalle.component';
import { LibroFormularioComponent } from './components/libro-formulario/libro-formulario.component';

export const routes: Routes = [
  {
    path: '',
    component: AutorListaComponent
  },
  {
    path: 'nuevo-autor',
    component: AutorFormularioComponent
  },
  {
    path: 'nuevo-libro',
    component: LibroFormularioComponent
  },
  {
    path: 'autor/:id',
    component: AutorDetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
