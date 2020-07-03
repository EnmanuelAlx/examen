class SolarSystem{


    constructor(planets){
        this.planets = planets
    }

    movePlanets(days){
        this.planets.forEach(planet => {
            planet.position(days)
        });
    }
}

module.exports = SolarSystem
