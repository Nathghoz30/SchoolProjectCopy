import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-voir-profil',
  templateUrl: './voir-profil.component.html',
  styleUrls: ['./voir-profil.component.css']
})
export class VoirProfilComponent {

  user: any;
  passwordV: any;
  constructor(private route: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
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

  afficherMdp(): any {
    if (this.passwordV === false) {
      this.passwordV = true;
    } else {
      this.passwordV = false;
    }
  }

}
