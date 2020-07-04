const dotenv = require('dotenv');
dotenv.config();

const DataBase = require('./db')
const Weather = require('./models/Weather')
const SolarSystem = require('./models/SolarSystem')
const { MAXIMUMPERIMETER } = require('./const')
const util = require('./utils')

const  WithoutPredict = (day)=>{
    const solarSystem = new SolarSystem()
    solarSystem.initialize();
    solarSystem.movePlanets(day);
    const planets = solarSystem.planets;
    const coor = [];

    planets.forEach( (planet) => {
        coor.push(...planet.coordinates)
    });

    if (util.colineal(...coor)) {

        const p1 = [planets[0].x, planets[0].y]
        const p2 = [planets[planets.length-1].x, planets[planets.length-1].y]
        const distance = util.distanceBetweenPointLane(p1, p2, [0,0])
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

const option = (op)=>{
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

const predictedTenYears =async ()=>{
    const db = new DataBase(process.env.HOST,process.env.DATABASE,process.env.USER,process.env.DB_PORT,process.env.PASSWORD, process.env.DATABASE_URL)
    db.init()
    await db.client.query(Weather.createdTableIfNotExist())
    const days = 360 * 10;
    for (let i = 0; i <= days; i++) {
        const predict = WithoutPredict(i)
        const op = option(predict)
        const weather = new Weather()
        await db.client.query(weather.create(i, op))
    }
}

module.exports = {
    predictedTenYears,
}