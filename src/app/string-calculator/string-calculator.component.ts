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

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const numArray = numbers.replace(/\\n/g, '\n').split(/[\n,;]/).map(num => parseInt(num.trim(), 10));
    const sum = numArray.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
    return sum;
  }

  calculateSum() {
    this.total = this.add(this.numberString);
  }

}
