package fr.cda.rest;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.cda.entities.Article;
import fr.cda.entities.User;
import fr.cda.repository.UserRepository;

@RestController
@CrossOrigin("*")
public class UserRest {
	
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping("inscription")
	public User newUser(@RequestBody User c)
    {
        return userRepo.save(c);
    }
	
	@GetMapping("allUser")
	public Iterable<User> getallConnex() {
		return userRepo.findAll();
	}
	

	@PostMapping("connexion")
	public Long findConnex(@RequestBody User c) {
		ArrayList<User> connexions = (ArrayList<User>) userRepo.findAll();
		User user = connexions.stream().filter(a -> a.getLogin().equals(c.getLogin())  && a.getPassword().equals(c.getPassword())).findFirst().get();

		return user.getId();
	}
	
	
	
	@GetMapping("/userLogin")
	public Iterable<User> getUserByIdentifiants(@RequestBody User c){
		return userRepo.findByLoginAndPassword(c.getLogin(), c.getPassword());
	}
	
		
	
	@GetMapping("/user/{id}")
	public Iterable<User> getUserById(@PathVariable Long id){
		return userRepo.getUtilisateurById(id);
	}
	
	
	@PutMapping("UserMaj/{id}")
	public User modifierPerson(@RequestBody User p , @PathVariable Long id) {
		p.setId(id); 
		return userRepo.save(p);
	}
	
	

	
}
