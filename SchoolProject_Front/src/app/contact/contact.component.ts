import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  msg: any;
  art: any;
  user: any;
  IdRech: any;
  constructor(private route: Router, private http: HttpClient, private accueilService: AccueilService) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8087/allArticle').subscribe({
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


  }

  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

}
