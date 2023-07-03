package fr.cda.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.cda.entities.Article;
import fr.cda.entities.Messages;
import fr.cda.repository.MessagesRepository;


@RestController
@CrossOrigin("*")
public class MessagesRest {
	
	@Autowired
	private MessagesRepository messageRepo;
	
	@PostMapping("nouvMess")
	public Messages newMessage(@RequestBody Messages m)
    {
        return messageRepo.save(m);
    }
	
	@GetMapping("/messages/{id}")
	public Iterable<Messages> getMessageById(@PathVariable Long id){
		return messageRepo.getMessagesById(id);
	}
	
	@GetMapping("allMessage")
	public Iterable<Messages> getallMessages() {
		return messageRepo.findAll();
	}
	
	@GetMapping("/messages/user/{id}")
	public Iterable<Messages> getMessageByDestinataire(@PathVariable Long id){
		return messageRepo.getMessageByIdUser(id);
		/*return noteRapiRepo.getByIdAuteur(id); 2e facon de faire*/
	}

}
