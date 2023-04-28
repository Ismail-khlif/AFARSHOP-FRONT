import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from "../Models/user";
import {AuthenticationRequest} from "../Models/authentication-request";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.BASE_URL}/api/authentication/`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser!: Observable<User>;
  private currentUserSubject!: BehaviorSubject<User>;

  // tslint:disable-next-line:ban-types
  public currentToken!: Observable<String>;
  // tslint:disable-next-line:ban-types
  private currentTokenSubject!: BehaviorSubject<String>;
  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr){
      try {
        storageUser = JSON.parse(storageUserAsStr);
      } catch (e) {
        console.error('Error parsing storageUserAsStr', e);
      }
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();

    let storageToken;
    const storageTokenAsStr = localStorage.getItem('token');
    if (storageTokenAsStr){
      try {
        storageToken = JSON.parse(storageTokenAsStr);
      } catch (e) {
        console.error('Error parsing storageTokenAsStr', e);
      }
    }
    // tslint:disable-next-line:ban-types
    this.currentTokenSubject = new BehaviorSubject<String>(storageToken);
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  private readonly API_URL = 'http://localhost:9090/AFAR/api/auth/';
  ar!: AuthenticationRequest;
  rr!:{
  lastName: string;
  password: string;
  address: string;
  dayOfBirth: Date;
  name: string;
  telNum: string;
  cin: string;
  email: string;
  username: string
};

  login(email: string, password: string): Observable<any> {
    this.ar = {email: email, password:password};
    console.log('login Service called');
    return this.http.post<any>(`${this.API_URL}authenticate`, this.ar)
      .pipe(
        map(response => {
            if (response) {
              localStorage.setItem('user', JSON.stringify(response.user));
              localStorage.setItem('token', JSON.stringify(response.token));
              this.currentUserSubject.next(response);
              console.log('login Service done successfully');
            }
            else {
              console.log('login Service failed');
            }
            return response;
          }
        )
      );
  }
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // tslint:disable-next-line:new-parens
    this.currentUserSubject.next(new User);
  }
  public isLoggedIn(): boolean {
    const storageUserAsStr = localStorage.getItem('token');
    if (storageUserAsStr){
      return true;
    }
    return false;
  }
  /*name: null,
   lastName: null,
   username: null,
   email: null,
   password: null,
   address: null,
   dayOfBirth: null,
   cin: null,
 // 	telNum: null*/
  // private role: string ="ROLE_SELLER";
  register(username: string, password: string, name: string, lastName: string, email: string, address: string, dayOfBirth: Date, cin: string, telNum: string): Observable<any> {
    this.rr = {username, password, name, lastName, email, address, dayOfBirth, cin, telNum};
    return this.http.post(
      `${this.API_URL}register`,
      this.rr,
      httpOptions
    );
  }

}
