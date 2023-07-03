package fr.cda.rest;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.cda.entities.Article;
import fr.cda.entities.Carte;
import fr.cda.entities.User;
import fr.cda.repository.ArticleRepository;
//import fr.cda.repository.CarteRepository;
import fr.cda.repository.UserRepository;


@RestController
@CrossOrigin("*")
public class ArticleRest {
	
	@Autowired
	private ArticleRepository articleRepo;
	@Autowired
	private UserRepository userRepo;
/* 	@Autowired
	private CarteRepository carteRepo; */
	
	@PostMapping("nouvProd")
	public Article newArticle(@RequestBody Article a)
    {
        return articleRepo.save(a);
    }

	@GetMapping("allArticle")
	public Iterable<Article> getallArticle() {
		return articleRepo.findAll();
	}
	
	@GetMapping("/article/{id}")
	public Iterable<Article> getArticleById(@PathVariable Long id){
		return articleRepo.getArticleById(id);
	}
	
	@GetMapping("/article/user/{id}")
	public Iterable<Article> getArticleByUser(@PathVariable Long id){
		return articleRepo.getArticleByIdVendeur(id);
		/*return noteRapiRepo.getByIdAuteur(id); 2e facon de faire*/
	}
	
	@PostMapping("vendeur")
	public User findVendeur(@RequestBody Article c) {
		ArrayList<Article> vendeurs = (ArrayList<Article>) articleRepo.findAll();
		Article article = vendeurs.stream().filter(a -> a.getNom().equals(c.getNom())).findFirst().get();

		return article.getVendeur();
	}
	
	
	@PostMapping("findArticle")
	public Article findArticle(@RequestBody Article c) {
		ArrayList<Article> vendeurs = (ArrayList<Article>) articleRepo.findAll();
		Article article = vendeurs.stream().filter(a -> a.getNom().equals(c.getNom())).findFirst().get();

		return article;
	}
	
	
	/* @PutMapping("achatArticle/{id}/acheteur/{idA}")
	public Article achatArticle(@PathVariable Long id, @PathVariable Long idA) {
		Article a = articleRepo.getArticleById(id).iterator().next();
		User acheteur = userRepo.getUtilisateurById(idA).iterator().next();
		a.setAcheteur(acheteur);
		a.getAcheteur();
		
		Carte c = carteRepo.getCarteByIdProprietaire(idA).iterator().next();
		Double solde = c.getSolde();
		c.setSolde(solde - a.getPrix());
		
		return articleRepo.save(a);
	} */
	
	
	
/* 	@PutMapping("Article/{id}/acheteur/{idA}")
	public Article achatArticle2(@RequestBody Article a, @PathVariable Long id, Long idA) {
		a.setId(id);
		User u = (User) userRepo.getUtilisateurById(idA);
		System.out.println("user: " + u);
		a.setAcheteur(u);
		return articleRepo.save(a);
		
	} */
	
	@GetMapping("/articleDispo")
	public Iterable<Article> findArticleEnVente(){
		return articleRepo.getArticleEnVente(null);	//=acheteur_id
	}
	
	
	@GetMapping("/articleVendu/acheteur/{id}")
	public Iterable<Article> findArticleVendu(@PathVariable Long id){
		return articleRepo.getArticleVendu(id);		//=acheteur_id
	}
	
		
	@GetMapping("vendeur/article/{id}")
	public User findVendeurByArticleId(@PathVariable Long id) {
		ArrayList<Article> vendeurs = (ArrayList<Article>) articleRepo.getArticleById(id);
		Article article = vendeurs.stream().filter(a -> a.getId().equals(id)).findFirst().get();

		return article.getVendeur();
	}
	
	
	@PutMapping("articleMaj/{id}")
	public Article modifierArticle(@RequestBody Article a , @PathVariable Long id) {
		a.setId(id); 
		return articleRepo.save(a);
	}
	
	@DeleteMapping("supprimerArticle2/{id}")
	public boolean  supprimerArticle2(@PathVariable Long id) {
		articleRepo.deleteById(id);
		return true;
		
	}
	
	
	
}
