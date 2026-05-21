package autor.libros.service;

import autor.libros.model.Libro;
import autor.libros.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibroService {

    @Autowired
    private LibroRepository libroRepository;

    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    public Optional<Libro> findById(Long id) {
        return libroRepository.findById(id);
    }

    public List<Libro> findByAutorId(Long autorId) {
        return libroRepository.findByAutorId(autorId);
    }

    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    public void deleteById(Long id) {
        libroRepository.deleteById(id);
    }
}