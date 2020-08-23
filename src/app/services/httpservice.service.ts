import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(  private httpClient:HttpClient) { }
  getUsers() {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
      
  });
  console.log(httpHeaders)
    return this.httpClient.get<any>('http://localhost:8080/hello',{ headers: httpHeaders }).pipe(
     map(
       userData => {
         console.log(userData);
        
        return userData;
       }
     )
         
    );
  }
}
