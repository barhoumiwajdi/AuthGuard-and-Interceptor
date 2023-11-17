import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilisService } from './utilis.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = "http://localhost:8282/api/v1"
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private HttpClient: HttpClient, private userAuthService: UtilisService) { }

  public login(logindata: any) {
    return this.HttpClient.post(this.baseurl + "/auth/login", logindata, {
      headers: this.requestHeader
    })
  }

  public forUser() {
    return this.HttpClient.get(this.baseurl + '/user/users', {
      responseType: 'text',
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