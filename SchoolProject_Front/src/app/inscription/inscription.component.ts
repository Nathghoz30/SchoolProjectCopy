import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  msgErr: any;
  user: any;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }
  ngOnInit(): void {
  }

/*   inscription(val: any): any {

    this.http.post('http://localhost:8087/inscription',
      {
        id: val.id,
        nom: val.nom,
        prenom: val.prenom,
        dateNaissance: val.dateNaissance,
        adresse: val.adresse,
        ville: val.ville,
        cp: val.cp,

        pseudo: val.pseudo,
        login: val.login,
        password: val.password
      }).subscribe({
        next: (value: any) => {
          console.log('POST call successful value returned in body', value);
          if (val) {
            this.user.user = val;
          }
          else {
            this.msgErr = 'infos déjà existantes';
          }
          this.route.navigateByUrl('connexion');
        },
        error: (err: any) => {
          console.log("POST call in error", err);
        }
      }

      );
  } */

  inscription(val: any): any {
    console.log(val);

    this.http.post('http://localhost:8087/inscription',
      {
        nom: val.nom,
        prenom: val.prenom,
        dateNaissance: val.dateNaissance,
        adresse: val.adresse,
        ville: val.ville,
        cp: val.cp,
        id: val.id,

        pseudo: val.pseudo,
        login: val.login,
        password: val.password
        
      }).subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
          if (val) {
            this.user = val;
            this.route.navigateByUrl('connexion');

          }
          else {
            this.msgErr = 'infos déjà existantes';
          }
        },
        response => {
          console.log("POST call in error", response);
        }
        );
  }

  CallConnexion(): any {
    this.route.navigateByUrl('connexion');
  }

}
