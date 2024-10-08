import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent implements OnInit {
  total: number | undefined;
  numberString: string = '';
  negativeNumbers: number[] | undefined;
  isDisplayErr: boolean = false;
  delimiter: RegExp | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const numStr = numbers.replace(/\\n/g, '\n')
    if(numStr.startsWith('//')){
     const newArr = numStr.split(/[\n]/);
     const y = newArr[0].slice(2);
     this.delimiter = new RegExp(y);;
    } else {
      this.delimiter = /[\n,;]/;
    }
    const numArray = numStr.split(this.delimiter).map(num => parseInt(num.trim(), 10));
    
    this.negativeNumbers = numArray.filter(num => num < 0);
    if (this.negativeNumbers.length > 0) {
      this.isDisplayErr = true;
      throw new Error(`negative numbers not allowed: ${this.negativeNumbers.join(', ')}`);
    }

    const sum = numArray.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
    return sum;
  }

  calculateSum() {
    this.total = this.add(this.numberString);
  }

}
