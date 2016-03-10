jest.unmock('../sum'); // unmock to use the actual implementation of sum

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        const sum = require('../sum');
        expect(sum(1, 2)).toBe(3);
    });
    it('adds 1 + 2.1 to equal 3.1', () => {
        const sum = require('../sum');
        expect(sum(1, 2.1)).toBe(3.1);
    });
});