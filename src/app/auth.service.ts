import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public angularFireAuth: AngularFireAuth // Inject Firebase auth service
  ) { 
  }
  
  /* Sign up */
  SignUp(email: string, password: string) {
  this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }
  
  /* Sign in */
  SignIn(email: string, password: string) {
  this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
  console.log("You're in!");
  })
  .catch(err => {
    console.log('Something went wrong:',err.message);
 });
 }
 
 /* Sign out */
 SignOut() {
 this.angularFireAuth.signOut();
 }
 isLoggedIn(){
  return this.angularFireAuth.authState.pipe(first()).toPromise();
 }
 async doSomething() {
  const user = await this.isLoggedIn()
  if (user) {
    // do something
  } else {
    // do something else
 }
}
}
