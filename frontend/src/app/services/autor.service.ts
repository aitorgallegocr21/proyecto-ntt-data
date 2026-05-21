import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  // Inyectamos el HttpClient para poder hacer las peticiones de red
  private http = inject(HttpClient);

  // Apuntamos a la ruta base pactada en el controlador de Spring Boot
  private apiUrl = '/api/autores';

  /**
   * 1. Obtener la lista de todos los autores (con sus libros asociados)
   * Satisface la operación "Listar datos de la entidad" de NTT DATA
   */
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  /**
   * 2. Obtener el detalle de un único autor mediante su ID
   * Satisface la operación "Consultar la relación entre principal e hija"
   */
  getAutorById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  /**
   * 3. Registrar un nuevo autor en la base de datos
   * Satisface el requisito de "Dar de alta registros mediante formulario"
   */
  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }
}
