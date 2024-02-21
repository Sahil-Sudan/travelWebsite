const { Db } = require('mongodb');
const mongoose =require('mongoose');

// Sikh kya mili
// 1. connect Db
// 2. Define Schema
// 3. Define collection
// 4. Insert data in db

async function connect(){
    try{

        const projectSchema= new mongoose.Schema({

    city:{
        type:String        
    },
    

    
})

//Inside collection our all document will be there
const collection =  new mongoose.model('wt',projectSchema)

data=[
    {
        city:"AGRA"
    },
    {
        city:"UTTRAKHAND"
    }
]

 // Connect to MongoDB
//  await mongoose.connect('mongodb://localhost:27017');

        const result=await collection.insertMany(data, { maxTimeMS: 600000 })
        console.log(result);

    }catch(error){
        console.log(error);
    }
}
connect();
 