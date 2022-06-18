import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegsitrationComponent } from './regsitration/regsitration.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"registration",component:RegsitrationComponent},
  {path:"sigin",component:SigninComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
