import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { Myclass } from './Myclass';
import { RegsitrationComponent } from './regsitration/regsitration.component';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseComponent,
    RegsitrationComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    
    
    
  ],
  providers: [Myclass,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
//   constructor(){
//     AngularFireModule.initializeApp(environment.firebaseConfig)
   
//  }
 }
