package com.senai.maquiagem.api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
	@Table(name = "tb_produtos")
	public class Produto {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;

		@NotBlank(message = "O nome do produto é obrigatório")
		@Column(nullable = false)
		private String nomeProduto;

		@Min(1995)
		private Integer anoLancamento;

		private String marca;

		@Column(name = "url_capa") 
		private String urlCapa;

		@ManyToOne
		@JoinColumn(name = "categoria_id")
		private Categoria categoria;

		public Produto() {
		}

		public Produto(Long id, String nomeProduto, Integer anoLancamento, String marca, String urlCapa, Categoria categoria) {
			this.id = id;
			this.nomeProduto = nomeProduto;
			this.anoLancamento = anoLancamento;
			this.marca = marca;
			this.urlCapa = urlCapa;
			this.categoria = categoria;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNomeProduto() {
			return nomeProduto;
		}

		public void setNomeProduto(String nomeProduto) {
			this.nomeProduto = nomeProduto;
		}

		public Integer getAnoLancamento() {
			return anoLancamento;
		}

		public void setAnoLancamento(Integer anoLancamento) {
			this.anoLancamento = anoLancamento;
		}

		public String getMarca() {
			return marca;
		}

		public void setMarca(String marca) {
			this.marca = marca;
		}

		public String getUrlCapa() {
			return urlCapa;
		}

		public void setUrlCapa(String urlCapa) {
			this.urlCapa = urlCapa;
		}

		public Categoria getCategoria() {
			return categoria;
		}

		public void setCategoria(Categoria categoria) {
			this.categoria = categoria;
		}
		
}
