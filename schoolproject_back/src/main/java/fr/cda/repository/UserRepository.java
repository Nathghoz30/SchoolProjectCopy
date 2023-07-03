package fr.cda.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import fr.cda.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
	public Iterable<User> findByLoginAndPassword(String Login, String Password);
	
	public Iterable<User> getUtilisateurById(Long id);
	

}
