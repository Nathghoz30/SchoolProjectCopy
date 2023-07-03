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


public class Messages {
	
	@Id@GeneratedValue
	private Long id;
	private String contenu;
	
	@ManyToOne
	private User expediteur;
	@ManyToOne
	private User destinataire;
	
	@ManyToOne
	private Article choix;


	


}
