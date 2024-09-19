"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importStar(require("node:test"));
const StringCalculator_1 = __importDefault(require("../src/services/StringCalculator"));
(0, node_test_1.describe)('StringCalculator', () => {
    let calculator;
    (0, node_test_1.beforeEach)(() => {
        calculator = new StringCalculator_1.default();
    });
    (0, node_test_1.default)('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });
    (0, node_test_1.default)('should return the number itself when a single number is provided', () => {
        expect(calculator.add("1")).toBe(1);
    });
    (0, node_test_1.default)('should return the sum of two comma-separated numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
    });
    (0, node_test_1.default)('should handle new lines between numbers', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });
    (0, node_test_1.default)('should support custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });
    (0, node_test_1.default)('should throw an exception for negative numbers', () => {
        expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });
    (0, node_test_1.default)('should throw an exception with all negative numbers listed', () => {
        expect(() => calculator.add("1,-2,-5")).toThrow("Negative numbers not allowed: -2, -5");
    });
});
// describe('StringCalculator', () => {
//   let calculator: StringCalculator;
//   beforeEach(() => {
//     calculator = new StringCalculator();
//   });
//   test('should return 0 for an empty string', () => {
//     expect(calculator.add("")).to.equal(0);
//   });
//   test('should return the number itself when a single number is provided', () => {
//     expect(calculator.add("1")).to.equal(1);
//   });
//   test('should return the sum of two comma-separated numbers', () => {
//     expect(calculator.add("1,2")).to.equal(3);
//   });
//   test('should handle new lines between numbers', () => {
//     expect(calculator.add("1\n2,3")).to.equal(6);
//   });
//   test('should support custom delimiters', () => {
//     expect(calculator.add("//;\n1;2")).to.equal(3);
//   });
//   test('should throw an exception for negative numbers', () => {
//     expect(() => calculator.add("1,-2,3")).to.throw("Negative numbers not allowed: -2");
//   });
//   test('should show all negative numbers in the exception message', () => {
//     expect(() => calculator.add("1,-2,-3")).to.throw("Negative numbers not allowed: -2, -3");
//   });
// });
