package com.senai.maquiagem.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.senai.maquiagem.api.entities.Produto;
import com.senai.maquiagem.api.services.ProdutoService;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

	@Autowired
	private ProdutoService servico;

	@GetMapping
	public List<Produto> listar() {
		return servico.listar();
	}

	@GetMapping("/{id}")
	public Produto buscar(@PathVariable Long id) {
		return servico.buscarPorId(id);
	}

	@PostMapping
	public Produto salvar(@RequestBody Produto produto) {
		return servico.salvar(produto);
	}

	@PutMapping("/{id}")
	public Produto atualizar(@PathVariable Long id, @RequestBody Produto dados) {
		return servico.atualizar(id, dados);
	}

	@DeleteMapping("/{id}")
	public void excluir(@PathVariable Long id) {
		servico.excluir(id);
	}
}