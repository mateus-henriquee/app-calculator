import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  number1 = 0;
  number2 = 0;
  result = 0;

  add() {
    this.result=this.number1 + this.number2;
  }

  subtract() {
    this.result=this.number1 - this.number2;
  }

  divide() {
    this.result=this.number1 / this.number2;
  }

  multiply() {
    this.result=this.number1 * this.number2;
  }

}
