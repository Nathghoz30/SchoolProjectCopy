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
public class Carte {
	
	@Id@GeneratedValue
	private Long id;
	private String numeroCarte;
	private String expiration;
	private String cvv;
	private Double solde;

	
	@ManyToOne
	private User proprietaire;

}
