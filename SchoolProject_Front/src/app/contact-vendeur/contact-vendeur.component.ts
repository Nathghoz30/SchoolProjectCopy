import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-contact-vendeur',
  templateUrl: './contact-vendeur.component.html',
  styleUrls: ['./contact-vendeur.component.css']
})
export class ContactVendeurComponent {

  article: any;
  user: any;
  vendeur: any;
  msg: any;

  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }


  ngOnInit(): void {


    this.http.get<any>('http://localhost:8087/article/' + this.accueilService.article.id).subscribe({
      next: (data) => {
        this.article = data[0];
        console.log(this.article);

      },
      error: (err) => { console.log(err); }
    });

    this.http.get('http://localhost:8087/vendeur/article/' + this.accueilService.article.id).subscribe({
      next: (data) => {
        this.vendeur = data;

      },
      error: (err) => { console.log(err); }
    });


    let val = localStorage.getItem("userId");
    this.http.get<any>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        console.log(this.user);
      },
      error: (err) => { console.log(err); }
    });

  }

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

/*   envoisMessage(val: any): any {

    console.log(val);


    this.http.post('http://localhost:8087/nouvMess',
      {
        contenu: val.message,
        destinataire: JSON.parse(val.destinataire),
        expediteur: JSON.parse(val.expediteur),
        choix: JSON.parse(val.choix)
      }).subscribe({
        next: (val: any) => {
          console.log('POST call successful value returned in body', val);
          if (val) {
            this.msg = val;
          }

          this.route.navigateByUrl('accueil');
        },
        error: (msg: any) => {
          console.log("POST call in error", msg);
        }
      }
      );

  } */

  envoisMessage2(myMsg: any): any {
    myMsg.expediteur = this.user; // ok
    myMsg.destinataire = this.vendeur; // ok
    myMsg.choix = this.article;

    this.http.post('http://localhost:8087/nouvMess', {
      id: myMsg.id,
      contenu: myMsg.message,
      expediteur: myMsg.expediteur, // ok
      destinataire: myMsg.destinataire, // ok
      choix: myMsg.choix

    }).subscribe({
      next: (data) => {
        if (myMsg) {
          this.msg = myMsg;
        }
        this.route.navigateByUrl('accueil');

      },
      error: (err) => { console.log(err); }
    });

  }

}
