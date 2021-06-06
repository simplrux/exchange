import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './components/package/package.component';
import { ProductsComponent } from './products.component';
import { ListComponent } from './components/list/list.component';
import { OptionsComponent } from './components/options/options.component';



@NgModule({
  declarations: [
    PackageComponent,
    ProductsComponent,
    ListComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
