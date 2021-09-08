import {sum, multiply}  from './math';

describe('Testing the sum function:' , () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds -1 + 2 to equal 1', () => {
        expect(sum(-1, 2)).toBe(1);
    });
});

describe('Testing the multiply function:' , () => {
    test('adds 1 + 2 to equal 2', () => {
        expect(multiply(1, 2)).toBe(2);
    });

    test('adds -1 + 2 to equal -2', () => {
        expect(multiply(-1, 2)).toBe(-2);
    });
});

