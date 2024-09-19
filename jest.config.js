"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('ts-jest').JestConfigWithTsJest} */
exports.default = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Tell Jest to handle TypeScript files
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js'],
};
