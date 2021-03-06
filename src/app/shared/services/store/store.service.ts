import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, Package, Product } from '../../models/models.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // packages: Package[] = [];
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

  getPackages() {
    const arr = [this.http.get('http://localhost:1337/categories/3').toPromise(), this.http.get('http://localhost:1337/products/2').toPromise()]
    Promise.all(arr).then((data: any[]) => {
      console.log(data);
      this.packages[2].name = data[0].Name;
      this.packages[2].price = data[0].Price;

      this.packages[2].options[1].name = data[1].name;
      this.packages[2].options[1].description = `${data[1].quantity} שירותים`;

      this.packages$.next(this.packages);
    })
  }

  packages$: BehaviorSubject<Package[]> = new BehaviorSubject(this.packages);
  productList$: BehaviorSubject<Product[]> = new BehaviorSubject(this.productList);
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(private http: HttpClient) { }
}
