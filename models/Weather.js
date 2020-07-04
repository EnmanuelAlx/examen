const TABLENAME = 'weather'


class Weather{

    constructor(){
    }
    
    static createdTableIfNotExist(){

        return `
            CREATE TABLE IF NOT EXISTS ${TABLENAME} (
                day int NOT NULL,
                weather varchar (20) NOT NULL
            )
        `
    }

    create(day, weather){
        return `
            INSERT INTO ${TABLENAME} (day, weather)
            VALUES (${day}, '${weather}');
        `
    }

    static findByDay(day){
        return `
            SELECT * from ${TABLENAME} where day = ${day}
        `
    }

    static getGroup(){
        return `
            SELECT COUNT(day) as number_of_days, weather FROM ${TABLENAME} GROUP BY weather
        `
    }

}


module.exports = Weather