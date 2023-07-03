import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  username = 'username';
  message = '';
  messages = [];

  user: any;
  msg: any;
  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // userConnect
    let val = localStorage.getItem("userId");
    this.http.get<any>("http://localhost:8087/user/" + val).subscribe({
      next: (data) => {
        this.user = data[0];
        console.log(this.user);
      },
      error: (err) => { console.log(err); }
    });

    // message recus
    this.http.get("http://localhost:8087/messages/user/" + val).subscribe({
      next: (data) => {
        this.msg = data;
        console.log(this.msg);
      },
      error: (err) => { console.log(err); }
    });

  }


  submit(): void {
    this.http.post('http://localhost:8087/nouvMess', {
      user: this.user.pseudo,
      message: this.message
    }).subscribe(() => this.message = '');
  }


  monCompte(): any {
    this.route.navigateByUrl('VoirProfil');

  }

  accueil(): any {
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

}
