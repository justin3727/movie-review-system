import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { Movie1Component } from './movie1/movie1.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewComponent } from './review/review.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CodComponent } from './cod/cod.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { List2Component } from './list2/list2.component';
import { Movie3Component } from './movie3/movie3.component';

const routes: Routes = [
  {path:'',redirectTo:'movie3',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'movie1',component:Movie1Component},
  {path:'movie', component: MovieComponent},
  {path:'movie3', component:Movie3Component},
  {path:'registration',component:RegistrationComponent},
  {path:'debitcard', component:DebitcardComponent},
  {path:'creditcard', component:CreditcardComponent},
  {path:'cod',component:CodComponent},
  { path: 'review/:title/:image/:videoLink', component: ReviewComponent },
  {path:'payment',component:PaymentComponent},
  {path:'addmovie', component:AddmovieComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'reactiveform', component:ReactiveformComponent},
  {path:'list2', component:List2Component},
  {path:'**', component:LoginComponent},
  
  
  { path:'movie1', loadChildren:()=>import ('./movie1/movie1.module').then(data => data.Movie1Module)},
  
  // {
  //   path: 'lazy',
  //   loadChildren: () => import('./lazy-loaded-module/lazy-loaded-module.module').then((m) => m.LazyLoadedModuleModule),
  // },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
