import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, Package, Product } from '../../models/models.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  packages: Package[] = [
    {
      name: 'חבילת בסיס', price: 'חינם', billing: 'לחודש', options: [
        { name: 'סוכן חכם - התראות נתוני מסחר', description: '3 משתמשים', available: true },
        { name: 'מוצרי API', description: '1 שירותים', available: true },
        { name: 'נתוני מניות', available: false },
        { name: 'הורדת קבצי מידע', available: false },
        { name: 'מנוי דוח BI יומי', available: false },
        { name: 'Graphical widget', available: false },
      ]
    },
    {
      name: 'חבילת Premium', price: '29', billing: 'לחודש', options: [
        { name: 'סוכן חכם - התראות נתוני מסחר', description: '10 משתמשים', available: true },
        { name: 'מוצרי API', description: '4 שירותים', available: true },
        { name: 'נתוני מניות', available: true },
        { name: 'הורדת קבצי מידע', available: true },
        { name: 'מנוי דוח BI יומי', available: true },
        { name: 'Graphical widget', available: false },
      ]
    },
    {
      name: 'חבילת Unlimited', price: '1000', billing: 'לחודש', options: [
        { name: 'סוכן חכם - התראות נתוני מסחר', description: '50 משתמשים', available: true },
        { name: 'מוצרי API', description: '40 שירותים', available: true },
        { name: 'נתוני מניות', available: true },
        { name: 'הורדת קבצי מידע', available: true },
        { name: 'מנוי דוח BI יומי', available: true },
        { name: 'Graphical widget', available: true },
      ]
    },
  ];


  productList: Product[] = [
    {
      name: 'חבילות מוצרים מוזלות'
    },
    { name: 'דוחות' },
    { name: 'מוצרי API' },
    { name: 'קורסים' },
    { name: 'כרטיסים לכנסים' },
    { name: 'התראות סוכן חכם' },
    { name: 'נתוני מניות' }
  ];

  cart: Cart = {
    shoppingList: [],
    userDetails: {
      email: '',
      fullName: '',
      streetName: '',
      streetNumber: 0,
      city: ''
    },
    payment: {
      ccnum: 0,
      fullName: '',
      expiry: '',
      cvv: 0
    }
  }

  packages$: BehaviorSubject<Package[]> = new BehaviorSubject(this.packages);
  productList$: BehaviorSubject<Product[]> = new BehaviorSubject(this.productList);
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }
}
