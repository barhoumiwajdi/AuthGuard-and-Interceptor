import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';
import { UtilisService } from 'src/app/_Services/utilis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute, private detaille: UtilisService) { }
  details: any
  selectedId? = this.detaille.getid()
  imageUrl: string = '';
  ngOnInit() {

    console.log(this.selectedId)
    this.userService.userDetails(this.selectedId).subscribe((response) => {
      const imageFileName = response.Image;
      this.imageUrl = this.imageUrl = this.userService.getImageUrl(imageFileName);;
      console.log(this.imageUrl);

      this.details = response
      console.log(this.details)

    }, (error) => {
      console.log(error);

    })
  }



}
