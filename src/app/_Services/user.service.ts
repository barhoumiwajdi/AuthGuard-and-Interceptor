import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:3002"
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  constructor(private HttpClient: HttpClient) { }
  addUser(user: any) {
    return this.HttpClient.post<any>(this.baseurl + "/auth/register", user)
  }
  public forUser(): Observable<any> {
    return this.HttpClient.get<any>(this.baseurl + "/user")
      .pipe(catchError(this.ErrorHandler))
  }
  public userDetails(id: any): Observable<any> {
    return this.HttpClient.get<any>(this.baseurl + "/user/serachbyid/" + id)
      .pipe(catchError(this.ErrorHandler))
  }
  ErrorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  getImageUrl(imageFileName: string): string {
    return `${this.baseurl}/${imageFileName}`;
  }
}
