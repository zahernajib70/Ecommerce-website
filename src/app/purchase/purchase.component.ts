import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//  import { FormControl, FormGroup } from "@angular/forms";
import { Myclass } from '../Myclass';
import { purchase } from '../purchaseinterface/purchase';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  myArray: any[] = []
  docs: any[] = []

color='';
quantity='';
size='';
category='';
single: any;
// purchase: purchase;
  constructor(private firestore: AngularFirestore,private myclass:Myclass) {
this.category=this.myclass.category;

  }

  ngOnInit(){
    this.docs = [];
    const collectionRef = this.firestore.collection('Accounts');
    const collectionInstance = collectionRef.valueChanges();
    collectionInstance.subscribe(ss => this.myArray = ss);

  }

submit(){this.firestore.collection('Accounts').add({
        color:this.color,quantity:this.quantity,size:this.size,category:this.category})
    .then(res => {
        console.log(res);
        
    })
    .catch(e => {
        console.log(e);
    })}
getCategory(){return this.category}
delete() {
  if (confirm('Delete?')) {
    this.firestore
    .collection('users')
    .get()
    .toPromise()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  });
      this.single=null
  }
}


}
