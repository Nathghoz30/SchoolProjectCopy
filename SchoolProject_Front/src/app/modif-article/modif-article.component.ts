import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.component.html',
  styleUrls: ['./modif-article.component.css']
})
export class ModifArticleComponent {

  mediaUrl: any;
  user: any;
  art: any;
  msgErr: any;

  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }


  ngOnInit(): void {
    let artId = localStorage.getItem("articleId");
    console.log("artID:" + artId);
    this.http.get<any>('http://localhost:8087/article/' + artId).subscribe({
      next: (data2) => {
        this.art = data2[0];
        console.log("article à modif" + this.art);
      },
      error: (err) => { console.log(err); }
    });

    console.log("articleId (accueilService): " + this.accueilService.article.id);


    let val = localStorage.getItem("userId");
    this.http.get<any>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        // console.log(this.user);
      },
      error: (err) => { console.log(err); }
    });

  }

  onFileChanged(event: any): any {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.mediaUrl = reader.result;
    };
  }


  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }


  mediaExist(media: any): boolean {
    if (media != null) {
      return true;
    } else {
      return false;
    }
  }



  modifierArticle(article: any): any {

    if (this.mediaExist(this.mediaUrl)) {
      article.baniere = window.btoa(this.mediaUrl);

    }

    this.http.put('http://localhost:8087/articleMaj/' + this.accueilService.article.id,
      {
        nom: article.nom,
        description: article.description,
        prix: article.prix,
        baniere: article.baniere,
        vendeur: article.vendeur = this.user,


      }).subscribe(
        (article) => {
          console.log('POST call successful value returned in body', article);
          if (article) {
            this.art.article = article;
          }
          else {
            this.msgErr = 'infos déjà existantes';
          }
          this.route.navigateByUrl('MesArticles');
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });


  }

}
