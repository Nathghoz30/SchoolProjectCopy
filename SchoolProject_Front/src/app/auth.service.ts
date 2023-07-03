import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  constructor() { }


  isConnected() {
    throw new Error('Method not implemented.');
  }
  
  setUserSession(user: any) {
    throw new Error('Method not implemented.');
  }
}
