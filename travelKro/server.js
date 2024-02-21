const express=require("express");
const mongoose= require("mongoose");
const app=express();

const uri = "mongodb+srv://wtProject:wtProject123@wtproject.vtom37n.mongodb.net/?retryWrites=true&w=majority";

// Form a connect async function in which wait till the mongoose get connected
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Conected to MongoDb");

        //Schema part

        const projectSchema= new mongoose.Schema({

            city:{
                type:String,
                unique: true
                
            }
            
        })
        
        //Inside collection our all document will be there having the defined schema 
        const collection =  new mongoose.model('wt',projectSchema)
        
        data=[
            {
                city:"AGRA"
            },
            {
                city:"UTTRAKHAND"
            },
            {
                city:"PATNA"
            },
            {
                city:"HYDERABADH"
            },
            {
                city:"JAIPUR"
            },
            {
                city:"GAYA"
            }
        
        ]
        
        
        const result = await collection.insertMany(data, { maxTimeMS: 300000 })

        console.log("Data inserted successfully:", result);
    }catch(error){
        console.error(error);
    }
}

connect();

// To confirm that the server get connected  use listen to log ASAP the 6969 got triggered
app.listen(6969, ()=>{
    console.log("Server started on port 6969");
})