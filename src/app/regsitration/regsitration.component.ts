import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-regsitration',
  templateUrl: './regsitration.component.html',
  styleUrls: ['./regsitration.component.css']
})
export class RegsitrationComponent implements OnInit {

  constructor(
    private authenticationService:AuthService,private router:Router){
    }
  ngOnInit(): void {
  }
  signUp(signUpEmail: HTMLInputElement, signUpPassword: HTMLInputElement) {
    let email = signUpEmail.value;
    let password = signUpPassword.value;
    this.authenticationService.SignUp(email,password);
    signUpEmail.value = '';
    signUpPassword.value = '';
    }
    
   
    logedin(){return this.authenticationService.isLoggedIn()} 
    signOut() {
    this.authenticationService.SignOut();
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
