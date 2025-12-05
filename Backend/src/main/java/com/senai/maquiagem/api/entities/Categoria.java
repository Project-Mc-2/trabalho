package com.senai.maquiagem.api.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_categorias")
public class Categoria {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank(message = "É obrigatório informar a categoria")
	    @Column(nullable = false, unique = true)
	    private String nome;

	    public Categoria() {}

	    public Categoria(Long id, String nome) {
	        this.id = id;
	        this.nome = nome;
	    }

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}
	    
	    
}
