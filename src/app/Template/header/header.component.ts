import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { UtilisService } from 'src/app/_Services/utilis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private utlis: UtilisService, private router: Router, public authservice: AuthService) { }
  public loggedin() {
    return this.utlis.isLoggedIn();

  }
  id?= this.utlis.getid()
  ngOnInit(): void {
    console.log(this.loggedin())
    console.log(this.id);
    console.log(this.utlis.getid())

  }


  public logout() {
    this.utlis.clear();
    this.router.navigate(['/']);
  }
  public permited(role: any) {
    return this.authservice.roleMatch([role])
  }





}
