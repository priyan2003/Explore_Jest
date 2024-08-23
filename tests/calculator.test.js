const mathematicalOpertion  = require('../calculator');

// describe -> collection of similar tests

describe("Calculator Test", () => {
    
    test('adding 3 + 5 should return 8',()=>{
        expect(mathematicalOpertion.sum(3,5)).toBe(8);
    })
    test('subtraction 3 - 5 should return -2',()=>{
        expect(mathematicalOpertion.diff(3,5)).toBe(-2);
    })
    test('subtraction 3 - 9 should not return -2',()=>{
        expect(mathematicalOpertion.diff(3,9)).not.toBe(-2);
    })
})