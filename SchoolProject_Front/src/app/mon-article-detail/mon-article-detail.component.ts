import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-mon-article-detail',
  templateUrl: './mon-article-detail.component.html',
  styleUrls: ['./mon-article-detail.component.css']
})
export class MonArticleDetailComponent {

  article: any;
  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }


  ngOnInit(): void {
    this.http.get('http://localhost:8087/article/' + this.accueilService.article.id).subscribe({
      next: (data: any) => {
        this.article = data;
        console.log(this.article);
      },
      error: (err: any) => { console.log(err); }
    });

    localStorage.setItem("articleId", this.accueilService.article.id + "");

  }

  retour(): any {
    this.route.navigateByUrl('EnVente');

  }

  callModifArticle(): any {
    this.route.navigateByUrl('ModifArticle');
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


  supprimerArticle(): any {
    this.http.delete('http://localhost:8087/supprimerArticle2/' + this.accueilService.article.id).subscribe({
      next: (data: any) => {
        this.article = data;
        console.log(this.article);
        this.route.navigateByUrl('accueil');

      },
      error: (err: any) => { console.log(err); }
    });

  }

}
