import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../Models/user";
import {AuthService} from "../../service/auth.service";
import {AuthenticationRequest} from "../../Models/authentication-request";

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss']
})
export class LoginAreaComponent implements OnInit {


  currentUser: User = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  form: AuthenticationRequest = {
    email:"",
    password: "",
  };
  constructor(private authService: AuthService, private route: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
    if (this.authService.isLoggedIn()){
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
    console.log('login page open');
  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log('clicked login');
    console.log(this.form.email);
    this.authService.login(this.form.email, this.form.password).subscribe({
      next: data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.authService.currentUser.subscribe(data => {
          this.currentUser = data;
          console.log('login done');
        });
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.route.navigate(['/']);
        /*this.reloadPage();*/
      },
      error: err => {
        this.isLoginFailed = true;
        console.log('err login');
        console.log(err);
      }
    });
  }
}
