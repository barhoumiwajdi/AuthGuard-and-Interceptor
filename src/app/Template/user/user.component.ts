import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {

    this.userService.forUser().subscribe(
      (response) => {
        console.log(response)
        this.message = response;
        this.display = false

      },
      (error) => {

        console.log(error);
      }
    );

  }
  message: any;

  constructor(private userService: UserService) { }
  display = true


}
