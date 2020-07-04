
const { Pool } = require('pg')
class DataBase{
    constructor(host, database, user, port, password, connectionString){
        
        if(typeof DataBase.instance === "object"){
            return DataBase.instance
        }else{
            this.user = user
            this.password = password
            this.database = database
            this.host     = host
            this.port     = port
            this.connectionString = connectionString
            this.client = null;

            DataBase.instance = this
            return this
        }
        

    }

    init(){
        this.client = new Pool({
            connectionString: this.connectionString,
            ssl: {
                rejectUnauthorized: false
            }
        })
        this.client.connect()
    }   
}

module.exports = DataBase;

