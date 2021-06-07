import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output()
  login: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  submitLogin() {
    this.login.emit(true);
  }

}
