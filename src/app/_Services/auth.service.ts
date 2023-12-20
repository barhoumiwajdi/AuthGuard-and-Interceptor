import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilisService } from './utilis.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = "http://localhost:3002"
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private HttpClient: HttpClient, private userAuthService: UtilisService) { }

  public login(logindata: any) {
    return this.HttpClient.post(this.baseurl + "/user/login", logindata, {
      headers: this.requestHeader
    })
  }
  uploadDataWithFile(jsonData: any, file: File): Observable<any> {
    const formData: FormData = new FormData();

    // Append JSON data
    formData.append('data', JSON.stringify(jsonData));

    // Append file
    formData.append('file', file, file.name);

    // Make the HTTP POST request
    return this.HttpClient.post(this.baseurl + "/user/register", formData, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  public roleMatch(allowedRoles: any): void | boolean {
    try {
      let isMatch = false;
      const userRoles: any = this.userAuthService.getRoles();

      if (userRoles != null && userRoles) {

        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }

      }

    } catch (err) {

      throw (err)
    }

  }
}