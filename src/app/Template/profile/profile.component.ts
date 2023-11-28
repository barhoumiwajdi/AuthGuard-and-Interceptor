import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  details: any
  selectedId?= this.route.snapshot.paramMap.get('id') || ''
  ngOnInit() {

    console.log(this.selectedId)
    this.userService.userDetails(this.selectedId).subscribe((response) => {
      this.details = response
      console.log(this.details)

    }, (error) => {
      console.log(error);

    })
  }



}
