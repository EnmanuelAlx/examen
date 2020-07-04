const SolarSystem = require('../models/SolarSystem')
const { MAXIMUMPERIMETER } = require('../const')
const util = require('../utils')

class WeatherController{

    static predict(req, res){
        let { day } = req.params
        const weather = WeatherController.option(WeatherController.WithoutPredict(day))
        res.status(200).send({'day': day, 'weather': weather})   
    }

    static predictByYear(req, res){
        const { year } = req.params
        const days = 360 * year
        let daysPrediction = []

        for (let i = 0; i <= days; i++) {

            let weather = WeatherController.option(WeatherController.WithoutPredict(i))
            daysPrediction.push({'day': i, 'weather' : weather})

        }
        
        res.status(200).send({'year': year, 'predictions': daysPrediction})

    }

    static WithoutPredict(day){
        const solarSystem = new SolarSystem()
        solarSystem.initialize();
        solarSystem.movePlanets(day);
        const planets = solarSystem.planets;
        const coor = [];

        planets.forEach( (planet) => {
            coor.push(...planet.coordinates)
        });

        if (util.colineal(...coor)) {

            let p1 = [planets[0].x, planets[0].y]
            let p2 = [planets[planets.length-1].x, planets[planets.length-1].y]
            let distance = util.distanceBetweenPointLane(p1, p2, [0,0])
            if (distance == 0) {
                return 0
            } else {
                return 1
            }

        } else if (util.pointIntoTriangle(...coor, 0,0)) {
            if(util.calculatePerimeter(...coor) == MAXIMUMPERIMETER) 
                return 3
            return 2
        }
        return -1
    }

    static option(op){
        switch (op) {
            case 0:
                return 'Drought'
            case 1:
                return 'Optimum'
            case 2:
                return 'Rainy'
            case 3:
                return 'Heavy Rainy'
            default:
                return 'Without forecast'
        }
    }


}

module.exports = WeatherController