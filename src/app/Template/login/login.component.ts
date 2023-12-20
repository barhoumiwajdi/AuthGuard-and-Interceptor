import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_Services/auth.service';
import { UtilisService } from 'src/app/_Services/utilis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthServices: AuthService, private utilisService: UtilisService, private router: Router, private toastr: ToastrService) { }
  display = false
  ngOnInit(): void {

  }

  showBottomCenter() {

  }
  login(loginForm: any) {
    let data = loginForm.value
    this.AuthServices.login(data).subscribe(
      (res: any) => {
        console.log(res.access_token)
        console.log(res.data.Role)
        this.utilisService.setRoles(res.data.Role)
        this.utilisService.setToken(res.access_token)
        this.utilisService.setid(res.data.id)
        this.display = true
        const role = res.role
        if (role == "ADMIN") {
          this.router.navigate(['/Admin'])
          this.toastr.success('Hello, this is a success toast!', 'Success');
          console.log("connected");

        }
        else if (role == "USER") {
          this.router.navigate(['/User'])
          this.toastr.success('Hello, this is a success toast!', 'Success');
          console.log("connected");

        }
        else {
          this.router.navigate(['/Manager'])
          this.toastr.success('Hello, this is a success toast!', 'Success');
          console.log("connected");

        }
      }
      , (error) => {
        alert(error.error.message)
        console.log(error.error)
      }
    )
  }

}
