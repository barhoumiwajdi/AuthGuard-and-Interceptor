import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { UtilisService } from 'src/app/_Services/utilis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthServices: AuthService, private utilisService: UtilisService, private router: Router) { }
  display = false
  ngOnInit(): void {

  }

  showBottomCenter() {

  }
  login(loginForm: any) {
    let data = loginForm.value
    this.AuthServices.login(data).subscribe(
      (res: any) => {
        console.log(res.token)
        console.log(res.role)
        this.utilisService.setRoles(res.role)
        this.utilisService.setToken(res.token)
        this.utilisService.setid(res.id)
        this.display = true
        const role = res.role
        if (role == "ADMIN") {
          this.router.navigate(['/Admin'])
        }
        else if (role == "USER") {
          this.router.navigate(['/User'])
        }
        else {
          this.router.navigate(['/Manager'])
        }
      }
      , (error) => {
        alert(error.error.message)
        console.log(error.error)
      }
    )
  }

}
