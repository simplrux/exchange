import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Cart } from '../../models/models.model';
import { StoreService } from '../../services/store/store.service';
import { confetti } from 'dom-confetti';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public store: StoreService) { }

  @Output()
  openLogin: EventEmitter<boolean> = new EventEmitter();


  @Input()
  close = false;
  @Input()
  email = '';

  @Input()
  logged = false;

  reveal = false;
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

  this.store.getPackages();
    this.store.cart$.subscribe(cart => {
      if (cart.shoppingList.length > 0) {
        this.close = false;
        setTimeout(() => {
          this.reveal = true;
          // sub.unsubscribe();
        }, 300);
      }
    });
  }


  confetti(button: HTMLElement) {
    confetti(button);
    setTimeout(() => {
      confetti(button, {
        spread: 180,
        duration: 5000
      });
    }, 600);
  }

  closeCart() {
    this.reveal = false;
    this.email = '';
    this.tabs.forEach((tab, index) => {
      if (tab.active) {
        tab.active = false;
      }
    });
    setTimeout(() => {
      this.close = true;
      this.tabs[0].active = true;
    }, 300);
  }

  calcPrice(shoppingList: any[]) {
    let sum = 0;
    shoppingList.forEach(product => {
      if (product.price !== 'חינם') {
        sum += Number(product.price);
      }
    });
    return sum;
  }
  round(num: number) {
    return Math.round(num);
  }
  next(element?: HTMLElement) {
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
      setTimeout(() => {
        this.tabs[0].active = true;
        this.actionText = 'מעבר לקופה';
      }, 300);

    }
    if (currentIndex + 1 === 3) {
      this.actionText = 'בחזרה לחנות';
      this.logged = false;
      this.showLogin(false);
      if (element) {
        this.confetti(element);
      }
    }
    if (currentIndex + 1 === 4) {
      this.closeCart();
      setTimeout(() => {
        this.store.cart$.next(
          {
            ...this.store.cart$.value, ...{
              shoppingList: []
            }
          }
        )
      }, 300);

    }
  }

  showLogin(bool: boolean) {
    this.openLogin.emit(bool);
  }

  gotTo(step: number) {

  }

}
