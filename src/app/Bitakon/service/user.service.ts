import {User} from "../Models/user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {AuthenticationRequest} from "../Models/authentication-request";

const url = "localhost:9090/AFAR/API/USERS/";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  authenticateUser(credentials: Partial<User>): Observable<AuthenticationRequest> {
    return this.http.post<AuthenticationRequest>(url + 'authenticateUser', credentials);
  }

  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(url + 'updateProfile', user);
  }

  removeUser(userId: number): Observable<void> {
    return this.http.delete<void>(url + 'removeUser?userId=' + userId);
  }

  retrieveAllUsers(descendant: boolean, sortedBy: string): Observable<User[]> {
    return this.http.get<User[]>(url + 'retrieveAllUsers?descendant=' + descendant + '&sortedBy=' + sortedBy);
  }
}
