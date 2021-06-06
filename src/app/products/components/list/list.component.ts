import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/models.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
