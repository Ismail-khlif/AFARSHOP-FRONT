import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {RegisterRequest} from "../../models/RegisterRequest";
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup  } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;
	public registerForm: FormGroup;
	public active = 1;
	
	currentUser: User = new User;
	isLoggedIn = false;
	isLoginFailed = false;
	form: any = {
		username: null,
		password: null
	};
	rform: any ={
		name: null,
		lastName: null,
		username: null,
		email: null,
		password: null,
	};

    constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private authService: AuthService) { 

      this.createLoginForm();
		this.createRegisterForm();
		this.authService.currentUser.subscribe(data => {
			this.currentUser = data;
		});
		if (this.authService.isLoggedIn()){
			this.isLoggedIn = true;
			this.router.navigate(['/dashboard/default']);
		}
	
    }

    createLoginForm() {
      this.loginForm = this.formBuilder.group({
        userName: [''],
        password: [''],
      });
    }
    createRegisterForm() {
      this.registerForm = this.formBuilder.group({
        userName: [''],
        password: [''],
        confirmPassword: [''],
      });
    }
    ngOnInit() {
      /*this.authService.currentUser.subscribe(data => {
        this.currentUser = data;
      });
      if (this.authService.isLoggedIn()) {
        this.isLoggedIn = true;
      }
      console.log('login page open');*/
    }
    onSubmit(): void {
      const { username, password } = this.form;
      this.authService.login(this.form.username, this.form.password).subscribe({
        next: data => {
          this.authService.currentUser.subscribe(data => {
            this.currentUser = data;
          });
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();// navigate to dashboard on success
        },
        error: err => {
          this.isLoginFailed = true;
        }
      });
    }
    onRegister(): void {

        this.authService.register(this.rform.username, this.rform.password, this.rform.name, this.rform.lastName, this.rform.email)
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
    reloadPage(): void {
      window.location.reload();
    }

    // On Forgotpassword link click
    onForgotpassword() {
      this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
  
    // On Signup link click
    onSignup() {
      this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
  

  

}
