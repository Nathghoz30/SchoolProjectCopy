import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-en-vente',
  templateUrl: './en-vente.component.html',
  styleUrls: ['./en-vente.component.css']
})
export class EnVenteComponent {

  art: any;
  user: any;
  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }

  ngOnInit(): void {
    let val = localStorage.getItem("userId");
    this.http.get('http://localhost:8087/article/user/' + val).subscribe({
      next: (data) => { this.art = data; },
      error: (err) => { console.log(err); }
    });

    this.http.get<any>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        console.log(this.user);
      },
      error: (err) => { console.log(err); }
    });
  }


  detailMonArticle(article: any): any {
    this.accueilService.article = article;
    this.route.navigateByUrl('MonArticleDetail');

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

  accueil(): any {
    this.route.navigateByUrl('accueil');

  }

}
