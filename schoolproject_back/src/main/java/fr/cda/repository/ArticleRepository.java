package fr.cda.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import fr.cda.entities.Article;

public interface ArticleRepository extends CrudRepository<Article, Long> {
	
	public Iterable<Article> getArticleById(Long id);
	
	@Query(value = "SELECT a FROM Article a INNER JOIN User u ON a.vendeur.id = u.id WHERE a.vendeur.id = ?1")
	public Iterable<Article> getArticleByIdVendeur(Long id);
	
	@Query(value = "SELECT a FROM Article a where acheteur_id = ?1")
	public Iterable<Article> getArticleVendu(Long id);
	
	@Query(value = "SELECT a FROM Article a where acheteur_id is null")
	public Iterable<Article> getArticleEnVente(Long id);
	


}
