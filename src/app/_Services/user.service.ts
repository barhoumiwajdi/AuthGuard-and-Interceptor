import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:8282/api/v1"
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  constructor(private HttpClient: HttpClient) { }
  addUser(user: any) {
    return this.HttpClient.post<any>(this.baseurl + "/auth/register", user)
  }
  public forUser() {
    return this.HttpClient.get<any>(this.baseurl + "/user/users")
      .pipe(catchError(this.ErrorHandler))
  }
  public userDetails(id: any) {
    return this.HttpClient.get<any>(this.baseurl + "/user/user/" + id)
      .pipe(catchError(this.ErrorHandler))
  }
  ErrorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

}
