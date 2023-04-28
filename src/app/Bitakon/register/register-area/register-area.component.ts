import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../service/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-area',
  templateUrl: './register-area.component.html',
  styleUrls: ['./register-area.component.scss']
})
export class RegisterAreaComponent {
  //public registerForm: UntypedFormGroup;

  form: any = {
    username: null,
    firstname: null,
    lastName: null,
    email: null,
    password: null,
    address: null,
    dayOfBirth: null,
    cin: null,
    telNum: null
  };

  constructor( private authService: AuthService,private router: Router) {
   // this.registerForm = this.createRegisterForm();
  }

  /*createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    });
  }*/

  onRegister(): void {
    //const { username, password, firstname, lastName, email, address, dayOfBirth, cin, telNum } = this.form.value;
    this.authService.register(this.form.lastName,this.form.password,this.form.firstname,this.form.email,this.form.username)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
          // handle successful registration response here
        },
        error => {
          console.error(error);
          // handle registration error here
        }
      );
  }
}
