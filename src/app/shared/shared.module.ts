import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, CartComponent
  ]
})
export class SharedModule { }
