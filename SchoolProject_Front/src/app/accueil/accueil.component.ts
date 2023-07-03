import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  msg: any;
  art: any;
  user: any;
  IdRech: any;
  constructor(private route: Router, private auth: AuthService, private http: HttpClient, private accueilService: AccueilService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8087/articleDispo').subscribe({
      next: (data: any) => { this.art = data; },
      error: (err: any) => { console.log(err); }
    });

    let val = localStorage.getItem("userId");
    this.http.get<any[]>("http://localhost:8087/user/" + val).subscribe({
      next: (data: any[]) => {
        this.user = data[0];
        console.log(this.user);
      },
      error: (err: any) => { console.log(err); }
    });



    console.log("User: ");
    console.log(this.auth.user);
  }

  changeFormatMedia(media: string): any {
    return window.atob(media);
  }



  mediaExist(media: null): boolean {
    if (media != null) {
      return true;

    } else {
      return false;
    }
  }

  detailArticle(article: any): any {
    this.accueilService.article = article;
    this.route.navigateByUrl('DetailArticle');
  }

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

  rechercheArticle(Recherche: any): any {

    this.http.post('http://localhost:8087/findArticle', Recherche).subscribe({
      next: (data: any) => {
        this.art = data;
        this.route.navigateByUrl('RecherArticle');
      },
      error: (err: any) => { console.log(err); }
    });

  }


}
