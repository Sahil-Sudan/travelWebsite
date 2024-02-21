const express = require('express')
const {connectToDb, getDb} = require('./db')
const { ObjectId } = require('mongodb')


//init app & middleware
const app=express()//invoking/initialising the express

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//db connection
let db

connectToDb((err)=>{         //This callback function will run after the connection estd. or if there is an error

    if(!err){
        //iss 3000 port number pr sb kaam krna hai bhai
        app.listen(3000 , ()=>{
            console.log('app Listening to port 3000');
          })
           db=getDb()//return db connection object  which help us to interact with the data fetch data , save new data ,update data etc
    }
})


//ObjId should be 12 bytes or 24 hex character(that means it should be properly formatted)  Otherwise BSON error will be there



//ab agr koi client kuch request krega server se toh app.get k through handle krenge usko

//routes
app.get('/cities', (req,res)=>{

    let wts = [] //Blunder Mistake I was trying to use books[] to make an array instead of wts
    // db.collection('wts')
    db.collection('wts')
        .find()
        // .sort({city:1})
        .forEach(book=>wts.push(book))//1.. mene glti yeh ki thi ki jo video m bta rha tha us same db k through get krne ka try kr rha tha which is wrong because we should have to retrieve from db which we have created in our own mongob
                                      //2.. 2nd way i was trying to fetch the data from the localhost:27017 but I was not able to connect to localhost.
                                            //TASK:-> I should find the reason of why i was not able to connect to local host
        .then(()=>{
            console.log(wts);
            res.status(200).json(wts)
        })
        .catch(()=>{
            res.status(500).json({error:'Could not fetch the documents'}) // I was also getting this error because i was trying to fetch the data from BOOKS instead of 'wts'
        })
    
        //status:500 means there is an server error
        //status:200 means all OK
    // res.json({mssg: "Welcome to the api"})//send the response whover is making the request
})


//Trying to get a single document from a db

// Correct instantiation using the new keyword
// const objectId = new ObjectId(); //????Is this line required to instantiation of ObjectId??????????

app.get('/cities/:id', (req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        db.collection('wts')
        .findOne({_id:new ObjectId(req.params.id)}) //???? Why this new keyword is there
        .then(doc=>{
            res.status(200).json(doc)
            
        })
        .catch(err=>{
            res.status(500).json({error: 'couldnot fetch the document'})
        })
    }else{
        //If the ObjId has correct format but not having the ID present in the db then we will get null 
        //Else if the id is invalid then below error will be shown
        res.status(500).json({error: 'Not a valid id'})
    }
})
