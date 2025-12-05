package com.senai.maquiagem.api.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.senai.maquiagem.api.entities.Categoria;
import com.senai.maquiagem.api.services.CategoriaService;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    @Autowired
    private CategoriaService servico;

    @GetMapping
    public List<Categoria> listar() {
        return servico.listar();
    }

    @GetMapping("/{id}")
    public Optional<Categoria> buscar(@PathVariable Long id) {
        return servico.buscarPorId(id);
    }

    @PostMapping
    public Categoria salvar(@RequestBody Categoria categorias) {
        return servico.salvar(categorias);
    }

    @PutMapping("/{id}")
    public Categoria atualizar(@PathVariable Long id, @RequestBody Categoria dadosAtualizados) {
    	Categoria g = servico.buscarPorId(id).orElseThrow(); 
        g.setNome(dadosAtualizados.getNome());
        return servico.salvar(g);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        servico.excluir(id);
    }
}