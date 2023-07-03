import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent {

  user: any;
  msgErr: any;
  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    let val = localStorage.getItem("userId");
    this.http.get<any[]>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        console.log(this.user);
      },
      error: (err) => { console.log(err); }
    });

  }

  modifProfil(profil: any): any {

    let val = localStorage.getItem("userId");
    this.http.put('http://localhost:8087/UserMaj/' + val,
      {
        nom: profil.nom,
        prenom: profil.prenom,
        dateNaissance: profil.dateNaissance,
        adresse: profil.adresse,
        ville: profil.ville,
        cp: profil.cp,

        pseudo: profil.pseudo,
        login: profil.login,
        password: profil.password
      }).subscribe(
        (profil) => {
          console.log('POST call successful value returned in body', profil);
          if (profil) {
            this.user.user = profil;
          }
          else {
            this.msgErr = 'infos déjà existantes';
          }
          this.route.navigateByUrl('connexion');
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

  }

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

}
