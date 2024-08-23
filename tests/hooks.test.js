// Setup and cleaning methods

const mathematicalOpertion = require("../calculator");

// 2 -> before each and after each
// 2 -> after All and after All

describe('Calculator Test', () =>{
    var input1 = 0;
    var input2 = 0;
    beforeAll(() => {
        console.log('beforeAll called!!!');
    });
    
    afterAll(() => {
        console.log('afterAll called!!!');
    });
    

    beforeEach(() =>{
        console.log('beforeEach called!!!');
    });

    afterEach(() => {
        console.log('afterEach called');
    });
    
    test('Check Sum',() => {
        expect(mathematicalOpertion.sum(2,5)).toBe(7);
    })
    test('Check diff',() => {
        expect(mathematicalOpertion.diff(2,5)).toBe(-3);
    })

})