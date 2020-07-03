const util = require('../utils')

test('Angle to radial', () => {
    expect(util.angleToRadial(90)).toBe(1.5707963267948966);
});

describe('Calculate slopes', () => {
    it('Diferents points', () => {
        expect(util.calculateSlope([-1,4], [3,0])).toBe(-1)
        expect(util.calculateSlope([-1,4], [0,3])).toBe(-1)
        expect(util.calculateSlope([3,0], [0,3])).toBe(-1)
    });
});

test('Area of a triangle', () => {
    expect(util.areaTriangle(500,0,2000,0,1000,0)).toBe(0)
});

test('Colineal', () => {
    expect(util.colineal(5,0,20,0,10,0)).toBe(true)
});
