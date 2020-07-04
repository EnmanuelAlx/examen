const config = require('./config')
const { Client } = require('pg')
const Weather = require('./models/Weather')
class DataBase{
    constructor(host, database, user, port, password){
        
        if(typeof DataBase.instance === "object"){
            return DataBase.instance
        }else{
            this.user = user
            this.password = password
            this.database = database
            this.host     = host
            this.port     = port
            
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

