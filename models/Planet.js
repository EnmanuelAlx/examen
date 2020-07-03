const util = require('../utils')

class Planet{
    constructor(name, speed, sense, radio){
        this.name = name
        this.x = 0
        this.y = 0
        this.speed = speed
        this.sense = sense
        this.radio = radio
    }

    angleInTheDay(day){
        return day*this.speed*this.sense
    }

    get coordinates(){
        return [this.x, this.y]
    }

    position(day){
        let angle = this.angleInTheDay(day)
        let radial = util.angleToRadial(angle);
        this.x = parseInt(this.radio * ((Math.cos(radial))).toFixed(5))
        this.y = parseInt(this.radio * ((Math.sin(radial))).toFixed(5))
    }
}

module.exports = Planet