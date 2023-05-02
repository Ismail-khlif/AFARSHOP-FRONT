import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile-area',
  templateUrl: './edit-profile-area.component.html',
  styleUrls: ['./edit-profile-area.component.scss']
})
export class EditProfileAreaComponent implements OnInit {
  currentUser: User = new User();
  firstname!: string;
  username!: string;
  lastName!: string;
  email!: string;
  password!: string;
  codeReset!: number;
  address!: string;
  dayOfBirth!: Date;
  cin!: string;
  telNum!: string;
  disabled = true;
  isLoggedIn = false;
  addresss: string[] = [];

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else this.router.navigate(['']);
  }

  ngOnInit(): void {
    // this.user=this.currentUser.firstname;

  }

  editProfile() {
    this.disabled = false;
  }

  updateProfile() {
    /* if (this.addresss[0] && this.addresss[1] && this.addresss[2]) this.user.addresss = this.addresss[0] + ", " + this.addresss[1] + ", " + this.addresss[2];
     this.userService.updateProfile(this.user).subscribe(
       user => {
         this.authService.saveUser(user);
         this.disabled = true;
         this.ngOnInit();
       }
     );*/

  }
}
