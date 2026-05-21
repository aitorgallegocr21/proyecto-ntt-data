package autor.libros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autor.libros.model.Autor;
import autor.libros.model.Libro;
import autor.libros.service.AutorService;

@RestController
@RequestMapping("/api/autores")
@CrossOrigin(origins = "*")
public class AutorController {

    @Autowired
    private AutorService autorService;

    @GetMapping
    public List<Autor> getAll() {
        return autorService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Autor> getById(@PathVariable Long id) {
        return autorService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Autor create(@RequestBody Autor autor) {
        return autorService.save(autor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        autorService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/libros")
    public ResponseEntity<List<Libro>> getLibros(@PathVariable Long id) {
        return autorService.findById(id)
            .map(a -> ResponseEntity.ok(a.getLibros()))
            .orElse(ResponseEntity.notFound().build());
    }
}