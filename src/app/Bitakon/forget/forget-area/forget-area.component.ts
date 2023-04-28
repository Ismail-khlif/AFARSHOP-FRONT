import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-forget-area',
  templateUrl: './forget-area.component.html',
  styleUrls: ['./forget-area.component.scss']
})
export class ForgetAreaComponent {
  userFaild = false;
  demDone = false;
  form: any = {
    email: null
  };
  constructor(private authService: AuthService) { }

  onDemResetPassword(): void {
    const email = this.form.email; // replace with your email input value
    this.authService.demResetPassword(email).subscribe(
      response => {
        if (response.status === 200) {
          console.log(response.status); // should print 200 if email is found
          this.demDone = true;
        } else if (response.status === 404) {
          console.log(response.status); // should print 440 if email is not found
          // handle email not found error here
          this.userFaild = true;
        }
      },
      error => {
        console.error(error);
        this.userFaild = true;

        // handle error here
      }
    );
  }
  onSubmit() {
    console.log(this.form.email);
    this.onDemResetPassword();
  }

}
