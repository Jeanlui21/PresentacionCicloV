import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.scss']
})
export class CanvasMenuComponent implements OnInit {

  constructor( private router: Router, private location: Location, private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
        if ( this.router.url === '/user/login') {
          this.router.navigate(['courses']);
        } else {

        }
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  hideMenu() {
    const x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  goBack() {
    this.location.back();
  }

  onLogout() {
    this.afsAuth.auth.signOut();
    this.router.navigate(['user/login']);
  }

}
