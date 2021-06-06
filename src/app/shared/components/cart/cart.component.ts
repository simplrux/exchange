import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/models.model';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public store: StoreService) { }
  actionText = 'מעבר לקופה';
  tabs = [
    {
      name: 'עגלת קניות',
      active: true
    },
    {
      name: 'פרטים',
      active: false
    },
    {
      name: 'תשלום',
      active: false
    },
    {
      name: 'התשלום בוצע בהצלחה',
      active: false
    },
  ]

  ngOnInit(): void {
  }

  next() {
    let currentIndex = 0;
    this.tabs.forEach((tab, index) => {
      if (tab.active) {
        tab.active = false;
        currentIndex = index;
      }
    });
    if (this.tabs[currentIndex + 1]) {
      this.tabs[currentIndex + 1].active = true;
      this.actionText = 'המשך לתשלום';
    } else {
      this.tabs[0].active = true;
      this.actionText = 'מעבר לקופה';
    }
    if (currentIndex + 1 === 3) {
      this.actionText = 'בחזרה לחנות';
    }
    if (currentIndex + 1 === 4) {
      this.store.cart$.next(
        { ...this.store.cart$.value, ...{
          shoppingList: []
        } }
      )
    }
  }

  gotTo(step: number) {

  }

}
