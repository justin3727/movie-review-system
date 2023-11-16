import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';
import { StarRatingComponent } from './feature/star-rating/star-rating.component';
import { RegistrationComponent } from './registration/registration.component';
import { Movie1Component } from './movie1/movie1.component';
import { ReviewComponent } from './review/review.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { CodComponent } from './cod/cod.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { List2Component } from './list2/list2.component';
import { Movie3Component } from './movie3/movie3.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    RegistrationComponent,
    Movie1Component,
    ReviewComponent,
    PaymentComponent,
    CreditcardComponent,
    DebitcardComponent,
    CodComponent,
    AddmovieComponent,
    ForgotPasswordComponent,
    ReactiveformComponent,
    List2Component,
    Movie3Component,
    // StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }