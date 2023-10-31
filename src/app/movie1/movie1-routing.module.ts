import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie1Component } from './movie1.component';

import { Routes } from '@angular/router';


const routes:Routes=[
{path:'movie1',component:Movie1Component},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Movie1RoutingModule { }
