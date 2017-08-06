import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  public email: string;
  public password: string;

  public errorText: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }


  login() {
    this.errorText = "";
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(success => {
      this.router.navigate(['/home']);
    }, fail => {
      this.errorText = "Yikes, something went really really wrong. Try again?";
    })
  }

  signUp() {
    this.errorText = "";
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(success => {
      this.router.navigate(['/home']);
    }, fail => {
      this.errorText = "Yikes, something went really really wrong. Try again?";
    })
  }


}
