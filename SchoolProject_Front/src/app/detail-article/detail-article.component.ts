import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent {

  article: any;
  user: any;
  vendeur: any;
  btnVisible = false;
  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }

  ngOnInit(): void {
    console.log('articleId:' + this.accueilService.article.id);
    this.http.get('http://localhost:8087/article/' + this.accueilService.article.id).subscribe({
      next: (data) => {
        this.article = data;
      },
      error: (err) => { console.log(err); }
    });


    const userConnect = localStorage.getItem('userId');
    console.log(userConnect);
    

    this.http.get('http://localhost:8087/vendeur/article/' + this.accueilService.article.id).subscribe({
      next: (data) => {
        this.vendeur = data;
       
        if (userConnect)
          this.btnVisible = parseInt(userConnect) !== this.vendeur.id;
      },
      error: (err) => { console.log(err); }
    });

  }

  retour(): any {
    this.route.navigateByUrl('accueil');

  }



  changeFormatMedia(media: any): any {
    return window.atob(media);
  }

  mediaExist(media: any): boolean {
    if (media != null) {
      return true;
    } else {
      return false;
    }
  }

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

  contacterVendeur(): any {
    this.route.navigateByUrl('ContactVendeur');
  }

  paiement(): any {
    this.route.navigateByUrl('PaiementArticle');
  }


}
