package com.senai.maquiagem.api.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.senai.maquiagem.api.entities.Produto;
import com.senai.maquiagem.api.repositories.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository repositorio;

	public List<Produto> listar() {
		return repositorio.findAll();
	}

	public Produto buscarPorId(Long id) {
		return repositorio.findById(id).orElse(null);
	}

	public Produto salvar(Produto produto) {
		return repositorio.save(produto);
	}

	public Produto atualizar(Long id, Produto dados) {
		Produto f = repositorio.findById(id).orElse(null);
		if (f == null)
			return null;

		f.setNomeProduto(dados.getNomeProduto());
		f.setAnoLancamento(dados.getAnoLancamento());
		f.setMarca(dados.getMarca());
		f.setUrlCapa(dados.getUrlCapa());
		f.setCategoria(dados.getCategoria());

		return repositorio.save(f);
	}

	public void excluir(Long id) {
		repositorio.deleteById(id);
	}
}