import { Component,HostListener, OnInit,Input } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input () header__transparent : string | undefined;

  headerSticky : boolean = false;

  showSidebar : boolean = false;

  // sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }


  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  logou() {
    this.auth.logOut();
    this.route.navigate(['login'])
  }
}
