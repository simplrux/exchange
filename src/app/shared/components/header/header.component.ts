import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

}
