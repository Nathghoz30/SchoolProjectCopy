package fr.cda;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SchoolprojectBackApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SchoolprojectBackApplication.class, args);
		System.out.println("lancement terminé");

	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("lancement ");
	}

}
