const DataBase = require('../db')
const Weather = require('../models/Weather')

class WeatherController{

    static async predict(req, res){
        const { day } = req.query
        const db = new DataBase()
        const weather = await db.client.query(Weather.findByDay(day))
        return res.status(200).send(...weather.rows)   
    }

    static async answers(req, res){
        const db = new DataBase()
        const weather = await db.client.query(Weather.getGroup())
        return res.status(200).send(weather.rows)
    }

}

module.exports = WeatherController