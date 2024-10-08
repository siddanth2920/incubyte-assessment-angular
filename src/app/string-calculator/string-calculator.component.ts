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
   // Method to add numbers from a string
   add(numbers: string): any {
    if (!numbers) {
      return 0;
    }
  }

  // Method called when the button is clicked
  calculateSum() {
   this.total = this.add(this.numberString);
  }

}
