import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  JSONResult } from '../model';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  baseUrl: any = 'https://localhost:44318/api/login/';

  register(email: string, password: string ) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
   // let body ={ email: "user2", password: "Password12345!@#" };
    let body ={ email: email, password: password };

   // return this.http.post<JSONResult>(this.baseUrl + 'login',body ,options)
    
     
    return this.http.post<JSONResult>(this.baseUrl + 'register',body ,options).map(
        (response: JSONResult) => {
            console.log(response);
            if(response.value== "Success") {
                localStorage.setItem('currentUser', email);
                response.isSuccess=true;
            }
            return response;
        }
    ).catch(
        (error: Response) => {
            return throwError(error.error.value);
        }
    );
  }



private handleError(operation: String) {
  return (err: any) => {
      let errMsg = `error in ${operation}() retrieving ${this.baseUrl}`;
      console.log(`${errMsg}:`, err)
      if(err instanceof HttpErrorResponse) {
          // you could extract more info about the error if you want, e.g.:
          console.log(`status: ${err.status}, ${err.statusText}`);
          // errMsg = ...
      }
      return Observable.throw(errMsg);
  }
}
}

export class registerUser{
  email:string;
  password:string;
}