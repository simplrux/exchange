import { Component, OnInit } from '@angular/core';
import { Package } from '../shared/models/models.model';
import { StoreService } from '../shared/services/store/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public store: StoreService) { }
  selectedPackage: Package = {
    name: '',
    billing: '',
    price: '',
    options: [{
      name: '', available: false
    }]
  };
  showOptions: boolean = false;
  ngOnInit(): void {
  }

  selectPackage($event: Package) {
    this.showOptions = false;
    this.store.cart$.next(
      {
        ...this.store.cart$.value, ...{
          shoppingList: [...this.store.cart$.value.shoppingList, ...[$event]]
        }
      }
    )
  }

}
