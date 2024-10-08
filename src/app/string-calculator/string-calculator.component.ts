import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent implements OnInit {
  total: number | undefined;
  numberString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  add(numbers: string): any {
    if (!numbers) {
      return 0;
    }
    const numArray = numbers.split(/[/n,;//]/).map(num => parseInt(num, 10));
    const sum = numArray.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
    return sum;
  }

  calculateSum() {
    this.total = this.add(this.numberString);
  }

}
