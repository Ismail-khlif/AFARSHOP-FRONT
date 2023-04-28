import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../service/auth.service";



@Component({
  selector: 'app-register-area',
  templateUrl: './register-area.component.html',
  styleUrls: ['./register-area.component.scss']
})
export class RegisterAreaComponent {
  public registerForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.createRegisterForm();
  }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      address: [''],
      dayOfBirth: [''],
      cin: [''],
      telNum: ['']
    });
  }

  onRegister(): void {
    const { username, password, firstname, lastName, email, address, dayOfBirth, cin, telNum } = this.registerForm.value;
    this.authService.register(username, password, firstname, lastName, email, address, dayOfBirth, cin, telNum)
      .subscribe(
        response => {
          console.log(response);
          // handle successful registration response here
        },
        error => {
          console.error(error);
          // handle registration error here
        }
      );
  }
}
