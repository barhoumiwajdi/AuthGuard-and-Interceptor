import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { ForbiddenNameValidator, PasswordValidator } from 'src/app/_Validator/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  resgistrationForm?: FormGroup;
  constructor(private userservices: UserService, private authservice: AuthService, private router: Router, private toastr: ToastrService) { }

  ErrorMsg = ''
  selectedFile?: File;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.resgistrationForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]),
      password: new FormControl(''),
      email: new FormControl(''),
      subscribe: new FormControl(false),
      ConfirmPassword: new FormControl(''),

      // mobile: new FormControl(''),
      // city: new FormControl(''),
      // state: new FormControl(''),
      // postalCode: new FormControl(''),
      // country: new FormControl(''),
      // streetAddress: new FormControl('')

    }, { validators: PasswordValidator })
    this.resgistrationForm?.get('subscribe')?.valueChanges
      .subscribe(CheckedValue => {
        const email = this.resgistrationForm?.get('email')
        if (CheckedValue) {
          email?.setValidators(Validators.required)
        } else {
          email?.clearValidators()
        }
        email?.updateValueAndValidity()
      })

  }

  get username() {
    return this.resgistrationForm?.controls['name']
  }
  get email() {
    return this.resgistrationForm?.controls['email']
  }
  get lastname() {
    return this.resgistrationForm?.controls['lastname']
  }


  onSubmit() {
    // console.log(this.resgistrationForm?.value)
    // const data = this.resgistrationForm?.value;
    // console.log(data);

    // this.userservices.addUser(data)
    //   .subscribe(
    //     data => {
    //       console.log("data received ", data)
    //       this.router.navigate(['/Login']);


    //     },

    //     error => {
    //       console.log(error)
    //       console.log(error)
    //       this.ErrorMsg = error.statusText
    //     }
    //   )
    console.log(this.resgistrationForm)
    console.log(this.selectedFile);

    if (this.selectedFile) {
      this.authservice.uploadDataWithFile(this.resgistrationForm?.value, this.selectedFile)
        .subscribe(response => {
          console.log('Upload successful', response);
          this.toastr.success('Hello, this is a success toast!', 'Success');
          this.router.navigate(['/Login'])
        }, error => {
          console.error('Error uploading data', error);
        });
    } else {
      console.warn('No file selected.');
      this.toastr.error('Oops, something went wrong!', 'Error');
    }
  }

}
