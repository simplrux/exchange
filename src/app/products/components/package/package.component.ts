import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from 'src/app/shared/models/models.model';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  constructor() { }
  @Input()
  package: Package = {
    name: '',
    billing: '',
    price: '',
    options: [{
      name: '', available: false
    }]
  };

  @Output()
  packageSelected = new EventEmitter<Package>();

  ngOnInit(): void {
  }

  selectPackage(selectedPackage: Package) {
    this.packageSelected.emit(selectedPackage);
  }

}
