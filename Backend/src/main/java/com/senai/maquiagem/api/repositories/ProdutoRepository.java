package com.senai.maquiagem.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.maquiagem.api.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {}
