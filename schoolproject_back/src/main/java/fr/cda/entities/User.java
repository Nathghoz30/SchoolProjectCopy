package fr.cda.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity @NoArgsConstructor @AllArgsConstructor @Data

public class User {

	@Id@GeneratedValue
	private Long id;
	private String nom;
	private String prenom;
	
	private String pseudo;
	
	private String login;
	private String password;
	private String adresse;
	private String ville;
	private String CP;

	private String dateNaissance;
	
	//private boolean admin;
	
	

}
