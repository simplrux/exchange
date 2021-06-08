import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  openCart: EventEmitter<boolean> = new EventEmitter();
  
  navList = {
    categories: [
      'נתוני מסחר',
      'סטטיסטיקה',
      'מרכז ידע',
      'הנפקות',
      'מערכת המסחר',
      'אודות הבורסה',
    ],
    icons: [
      'bell',
      'headphones',
      'cart',
      'lock'
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  showCart(){
    this.openCart.emit(false);
  }

}
