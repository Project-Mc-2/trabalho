package com.senai.maquiagem.api.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.senai.maquiagem.api.entities.Categoria;
import com.senai.maquiagem.api.repositories.CategoriaRepository;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repositorio;

    public List<Categoria> listar() {
        return repositorio.findAll();
    }

    public Optional<Categoria> buscarPorId(Long id) {
        return repositorio.findById(id);
    }

    public Categoria salvar(Categoria categoria) {
        return repositorio.save(categoria);
    }

    public void excluir(Long id) {
        repositorio.deleteById(id);
    }
}
