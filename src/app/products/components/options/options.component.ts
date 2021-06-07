import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from 'src/app/shared/models/models.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor() { }
  @Output()
  optionsChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  package: Package = {
    name: '',
    billing: '',
    price: '',
    options: [{
      name: '', available: false
    }]
  };

  showServices = true;
  services = ['מדדים נתוני בסיס', 'פרמטרים ושקולות', 'מדדים אונליין', 'לוח הנפקות', 'תנועת כסף חכם', 'עסקאות בבורסה'];
  ngOnInit(): void {
  }

  selectPackage(event: Package){
    this.optionsChanged.emit(event);
  }

}
