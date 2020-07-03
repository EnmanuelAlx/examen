const Planet = require("../models/Planet")
const SolarSystem = require("../models/SolarSystem")
const util = require('../utils')
const { CLOCKWISE, COUNTERCLOCKWISE } = require ('../const')

describe('Angle', () => {
    it('Angle of the planet Filaseo', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        expect(filaseo.angleInTheDay(90)).toBe(90)
    });
    it('Angle of the planet Betalfa', () => {
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        expect(betalfa.angleInTheDay(30)).toBe(90)
    });
    it('Angle of the planet Vendetti', () => {
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(vendetti.angleInTheDay(18)).toBe(-90)
    });
});

test('Position of the planet', () => {
    let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
    filaseo.position(0)
    let x = filaseo.x
    let y = filaseo.y
    expect([x, y]).toStrictEqual([500,0]);
});

test('Move the planets', ()=>{
    let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
    let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
    let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
    let solarSystem = new SolarSystem([filaseo, betalfa, vendetti])
    solarSystem.movePlanets(0);
    expect([filaseo.x, filaseo.y, betalfa.x, betalfa.y, vendetti.x, vendetti.y]).toStrictEqual([500,0,2000,0,1000,0])
});

describe('Case 1: Planets aligned with the sun', () => {
    it('0 days', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(util.verifyDrought([filaseo, betalfa, vendetti], 0)).toBe(true)
    });
    it('100 days', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(util.verifyDrought([filaseo, betalfa, vendetti], 100)).toBe(false)
    });
    it('90 days', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(util.verifyDrought([filaseo, betalfa, vendetti], 90)).toBe(true)
    });
    it('270 days', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(util.verifyDrought([filaseo, betalfa, vendetti], 270)).toBe(true)
    });
    it('450 days', () => {
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        expect(util.verifyDrought([filaseo, betalfa, vendetti], 450)).toBe(true)
    });
});

