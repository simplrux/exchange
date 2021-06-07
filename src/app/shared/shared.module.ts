import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, CartComponent, LoginComponent
  ]
})
export class SharedModule { }
