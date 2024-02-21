const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://wtProject:wtProject123@wtproject.vtom37n.mongodb.net/?retryWrites=true&w=majority";

let dbConnection

module.exports={
    connectToDb:(cb)=>{//cb(call back function , which we will use in future this is the function which we want to run after the cnnection is estd. )

        MongoClient.connect(uri)//Mistake:->Initially I was trying to connect with localhost:27017 in which i was failed
        .then((client)=>{
            dbConnection= client.db()
            return cb()
        })
        .catch(err=>{
            console.log(err);
            return cb(err)
        })
    },//Job->Initially connect to a db
    //asynchronous task which takes some time to o and return a promise

    getDb: ()=>dbConnection//return our db connection(Value) after we have already connected to it
                 //allow us to communicate with the db
                 //return a value which will be used in future to communicate with the db to add data,read data,reove data etc.
                 //we will call this value from app.js after the connection with db
}