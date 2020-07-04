const SolarSystem = require('../models/SolarSystem')
const { MAXIMUMPERIMETER } = require('../const')
const util = require('../utils')

class WeatherController{

    static predict(req, res){
        let { day } = req.params;
        switch (WeatherController.WithoutPredict(day)) {
            case 0:
                res.status(200).send({'day': day, 'weather': 'Drought'})
                break;
            case 1:
                res.status(200).send({'day': day, 'weather': 'Optimum'})
                break
            case 2:
                res.status(200).send({'day': day, 'weather': 'Rainy'})
                break
            case 3:
                res.status(200).send({'day': day, 'weather': 'Heavy Rainy'})
                break
            default:
                res.status(200).send({'day': day, 'weather': 'Without forecast'})
                break;
        }
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



}

module.exports = WeatherController