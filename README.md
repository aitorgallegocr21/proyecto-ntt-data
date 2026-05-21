# Proyecto Final FP Dual — Biblioteca (Autores y Libros)

Aplicación web full stack desarrollada como proyecto final de 1ºFP Dual.  
Permite gestionar autores y sus libros mediante una API REST conectada a un frontend en Angular.

**Temática:** Biblioteca — relación `Autor` → `Libros` (1:M)

---

## Tecnologías utilizadas

| Capa | Tecnología |
|------|------------|
| Frontend | Angular 21.2 |
| Backend | Java 21 + Spring Boot 4.0.6 |
| Base de datos | H2 en memoria |
| Gestor de dependencias (back) | Maven |
| Gestor de dependencias (front) | npm 10.9.7 |

---

## Estructura del repositorio

```
proyecto-ntt-data-master/
├── backend/      → API REST con Spring Boot
└── frontend/     → Aplicación Angular
```

---

## Requisitos previos

Antes de arrancar el proyecto asegúrate de tener instalado:

- **Java 21** — [https://adoptium.net](https://adoptium.net)
- **Maven** (o usar el wrapper `./mvnw` incluido en el proyecto)
- **Node.js 18+** y **npm 10+** — [https://nodejs.org](https://nodejs.org)
- **Angular CLI 21** — `npm install -g @angular/cli`

---

## Arranque del backend

```bash
cd backend
./mvnw spring-boot:run
```

El servidor arrancará en: `http://localhost:8080`

La consola H2 (base de datos en memoria) estará disponible en:  
`http://localhost:8080/h2-console`

> Los datos de ejemplo se cargan automáticamente al arrancar gracias al script SQL incluido.

---

## Arranque del frontend

```bash
cd frontend
npm install
ng serve
```

La aplicación estará disponible en: `http://localhost:4200`

> Es necesario tener el backend corriendo antes de iniciar el frontend para que las llamadas a la API funcionen correctamente.

---

## Endpoints principales de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/autores` | Lista todos los autores |
| GET | `/autores/{id}` | Detalle de un autor |
| POST | `/autores` | Crear un nuevo autor |
| GET | `/autores/{id}/libros` | Libros de un autor |
| GET | `/libros` | Lista todos los libros |
| GET | `/libros/{id}` | Detalle de un libro |
| POST | `/libros` | Crear un nuevo libro |

---

## Funcionalidades implementadas

**Frontend (Angular 21)**
- Componentes Standalone
- Uso de Signals para manejo de estado
- Formularios reactivos para crear autores y libros
- Servicios Angular con Observables para llamadas HTTP
- Navegación entre vistas con Angular Router

**Backend (Spring Boot)**
- API REST funcional
- Operaciones CRUD sobre `Autor` y `Libro`
- Relación 1:M entre `Autor` y `Libro`
- Persistencia con base de datos H2 en memoria
- Datos de ejemplo cargados al arrancar

---

## Problemas encontrados durante el desarrollo

- **CORS:** fue necesario configurar CORS en el backend para permitir peticiones desde `localhost:4200`, ya que el navegador las bloqueaba por defecto al ser orígenes distintos.
- **H2 y Spring Boot 4:** la configuración de la consola H2 requirió ajustes en `application.properties` respecto a versiones anteriores de Spring Boot.
- **Signals en Angular:** al ser una característica relativamente nueva, fue necesario revisar la documentación oficial para entender cómo combinarlos correctamente con Observables en los servicios.
- **Dependencias del proyecto:** la coordinación entre los miembros del grupo al trabajar en paralelo sobre frontend y backend requirió definir bien los contratos de la API (nombres de campos, rutas) antes de empezar a implementar cada parte.

---

## Autores

Proyecto desarrollado en grupo por alumnos de 1º FP Dual.
Jesús Barroso Barriga
Miguel Sánchez-Lafuente Bosch
Aitor Gallego-Casilda Romero
Álvaro Daniel García Roque