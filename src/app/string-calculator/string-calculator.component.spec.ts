import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert empty string as 0', () => {
    const output = component.add('');
    expect(output).toBe(0);
  });
  it('should add comma seperated numbers', () => {
    const output = component.add('1,3');
    expect(output).toBe(4);
  });
  it('should convert non-numerical to 0', () => {
    const output = component.add('str');
    expect(output).toBe(0);
  });
});
