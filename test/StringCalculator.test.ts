import test, { beforeEach, describe } from 'node:test';
import StringCalculator from '../src/services/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself when a single number is provided', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('should return the sum of two comma-separated numbers', () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test('should throw an exception with all negative numbers listed', () => {
    expect(() => calculator.add("1,-2,-5")).toThrow("Negative numbers not allowed: -2, -5");
  });
});