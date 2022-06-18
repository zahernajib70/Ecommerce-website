import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  signIn(signinEmail: HTMLInputElement, signinPassword: HTMLInputElement) {
    let email = signinEmail.value;
  let password = signinPassword.value;
  this.authenticationService.SignIn(email,password);
  signinEmail.value = '';
  signinPassword.value = '';
  this.router.navigate(['']);
  }
}
