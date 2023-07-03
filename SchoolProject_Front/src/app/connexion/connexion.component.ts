
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
//import { InscriptionComponent } from '../inscription/inscription.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connex: any;
  msgVisible = false;
  msg = 'id ou mdp incorrectes';
  constructor(private route: Router, private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }


  CallInscription(): any {
    this.route.navigateByUrl('inscription');
  }

  connexion(val: any): any {

    this.http.post('http://localhost:8087/connexion',
      {
        login: val.login,
        password: val.password
      }).subscribe({
        next: (val:any) => {

          if (val) {
            localStorage.setItem("userId", val + "");
            this.route.navigateByUrl('accueil');
          }
        },
        error: (err:any) => {
          console.log('POST call in error', err);
          this.msgVisible = true;
        },
        });

  }

  verif(): any {
    /*
    if (this.auth.user != null) {
      this.route.navigateByUrl('connexion');
    }*/

    let val = localStorage.getItem("userId");
    if (val === null) {
      this.route.navigateByUrl('connexion');
    }
  }

}

