package autor.libros.repository;

import autor.libros.model.Autor;//La carpeta del modelo
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {
    // No necesitas nada más. JpaRepository ya te da:
    // findAll(), findById(), save(), deleteById(), count(), existsById()...
}