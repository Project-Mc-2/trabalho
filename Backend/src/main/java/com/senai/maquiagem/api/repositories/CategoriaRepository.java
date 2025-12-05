package com.senai.maquiagem.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.maquiagem.api.entities.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {} 