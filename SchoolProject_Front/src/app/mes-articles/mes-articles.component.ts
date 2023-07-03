import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-mes-articles',
  templateUrl: './mes-articles.component.html',
  styleUrls: ['./mes-articles.component.css']
})
export class MesArticlesComponent {

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

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

}
