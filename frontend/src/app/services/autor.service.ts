import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor, Libro } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private http = inject(HttpClient);
  private apiUrl = '/api/autores';
  private libroApiUrl = '/api/libros';

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  getAutorById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  crearLibro(libro: Partial<Libro>): Observable<Libro> {
    return this.http.post<Libro>(this.libroApiUrl, libro);
  }
}
