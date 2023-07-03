package fr.cda.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import fr.cda.entities.Messages;


public interface MessagesRepository extends CrudRepository<Messages, Long> {
	
	public Iterable<Messages> getMessagesById(Long id);
	
	@Query(value = "SELECT m FROM Messages m INNER JOIN User u ON m.destinataire.id = u.id WHERE m.destinataire.id = ?1")
	public Iterable<Messages> getMessageByIdUser(Long id);


}
