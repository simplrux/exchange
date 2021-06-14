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
  @Output()
  email: EventEmitter<string> = new EventEmitter();
  disable = true;
  ngOnInit(): void {
  }

  submitLogin(email: string) {
    if (email) {
      this.login.emit(true);
      this.email.emit(email);
    }

  }

}
