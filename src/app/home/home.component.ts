import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Myclass } from '../Myclass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myArray: any[] = []
  docs: any[] = []
  form11 = new FormGroup({
    newValue: new FormControl('')
});
  constructor(private firestore: AngularFirestore,private router: Router,private myclass:Myclass,private authenticationService:AuthService) {

  }

  ngOnInit(){
    this.docs = [];
    const collectionRef = this.firestore.collection('Accounts');
    const collectionInstance = collectionRef.valueChanges();
    collectionInstance.subscribe(ss => this.myArray = ss);

  }
  onSubmit() {
    this.firestore.collection('Accounts').add({
        name: this.form11.value.newValue
    })
    .then(res => {
        console.log(res);
        this.form11.reset();
    })
    .catch(e => {
        console.log(e);
    })
}
onPurchaseClick(category:string){
  this.setCtaegory(category);
  this.router.navigate(["purchase"]);
}
setCtaegory(categ:string){
  this.myclass.category=categ;
  }
  logedin(){return this.authenticationService.isLoggedIn()} 
  signOut() {
    this.authenticationService.SignOut();
    }
}
