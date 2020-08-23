import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Token{
  constructor(
    public token:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username_p, password_p) {
      
      return this.httpClient.post<Token>('http://localhost:8080/authenticate',{username:username_p,password:password_p}).pipe(
       map(
         userData => {
           console.log(userData);
           sessionStorage.setItem('token',userData.token);
          sessionStorage.setItem('username',username_p);
          return userData;
         }
       )
           
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}