package fr.cda.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @NoArgsConstructor @AllArgsConstructor @Data

public class Article {
	

	@Id@GeneratedValue
	private Long id;
	private String nom;
	private String description;
	private Double prix;
	
	@Lob
	private byte[] baniere;
	
	@ManyToOne
	private User vendeur;
	
	@OneToOne
	private User acheteur_id;

}
