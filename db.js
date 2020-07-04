const config = require('./config')
const { Client } = require('pg')
const Weather = require('./models/Weather')
class DataBase{
    constructor(env){
        
        if(typeof DataBase.instance === "object"){
            return DataBase.instance
        }else{
            this.user = env.user
            this.password = env.password
            this.database = env.database
            this.host     = env.host
            this.dialect  = env.dialect
            this.client = null;

            DataBase.instance = this
            return this
        }
        

    }

    init(){
        this.client = new Client({
            user: this.user,
            host: this.host,
            database: this.database,
            password: this.password,
            port: this.port
        })
        this.client.connect()
    }   
}

module.exports = DataBase;

