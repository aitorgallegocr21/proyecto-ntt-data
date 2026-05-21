export interface Libro {
  id?: number;
  titulo: string;
  isbn: string;
  anio: number;
  genero: string;
}

export interface Autor {
  id?: number;
  nombre: string;
  nacionalidad: string;
  libros?: Libro[]; // Relación 1:M (Un autor tiene muchos libros)
}
