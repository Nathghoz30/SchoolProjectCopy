import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-creer-article',
  templateUrl: './creer-article.component.html',
  styleUrls: ['./creer-article.component.css']
})
export class CreerArticleComponent {

  msgErr: any;
  user: any;
  mediaUrl: any;

  constructor(private http: HttpClient, private route: Router, private auth: AuthService) { }
  ngOnInit(): void {

    let val = localStorage.getItem("userId");
    this.http.get<any>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        console.log(this.user);
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


  mediaExist(media: any): boolean {
    if (media != null) {
      return true;
    } else {
      return false;
    }
  }


  ajoutArticle(article: any): any {


    article.vendeur = this.user;
    if (this.mediaExist(this.mediaUrl) === true) {
      article.baniere = window.btoa(this.mediaUrl);

    }
    this.http.post('http://localhost:8087/nouvProd', article).subscribe({
      next: (data) => {
        this.route.navigateByUrl('accueil');

      },
      error: (err) => { console.log(err); }
    });
  }






  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }


}
