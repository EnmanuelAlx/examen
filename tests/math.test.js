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

test('Point into a Triangle', () => {
    expect(util.pointIntoTriangle(0,0,20,0,10,30,10,15)).toBe(true)
});

test('Distance Between two points', () => {
    expect(util.distanceBetweenTwoPoints(7,4,1,2)).toBe(6.324555320336759)
});

test('Calculate Perimeter', () => {
    expect(util.calculatePerimeter(3,-2,-3,0,1,3)).toBe(16.709720127471265)
});