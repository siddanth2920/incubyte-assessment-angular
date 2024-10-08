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
  it('should handle new line(/n) delimiter', () => {
    const output = component.add('1\n2\n3');
    expect(output).toBe(6);
  });
  it('should handle ; delimiter', () => {
    const output = component.add('1;2\n3');
    expect(output).toBe(6);
  });
  it('should throw an exception if there is a negative number', () => {
    expect(() => component.add('1,3,-2')).toThrowError('negative numbers not allowed: -2');
  });
  it('should handle custom delimiter', () => {
    const output = component.add('//%\n1%6');
    expect(output).toBe(7);
  });
});
