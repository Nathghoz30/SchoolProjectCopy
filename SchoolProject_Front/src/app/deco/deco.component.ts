import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.route.navigateByUrl('connexion');

  }

}
