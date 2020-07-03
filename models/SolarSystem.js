const Planet = require('./Planet')
const { CLOCKWISE, COUNTERCLOCKWISE } = require ('../const')

class SolarSystem{


    constructor(planets){
        this.planets = planets
    }

    initialize(){
        let filaseo = new Planet('Filaseo', 1, CLOCKWISE, 500)
        let betalfa = new Planet('Betalfa', 3, CLOCKWISE, 2000)
        let vendetti = new Planet('Vendetti', 5, COUNTERCLOCKWISE, 1000)
        this.planets = [filaseo, betalfa, vendetti];
    }

    movePlanets(days){
        this.planets.forEach(planet => {
            planet.position(days)
        });
    }
}

module.exports = SolarSystem
