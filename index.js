//****NODE JS****

//----CREATE SERVER----
//START
// const http = require('http');

// http.createServer((req,res)=>{
//     res.write("Hello World");
//     res.end();
// }).listen(4500)


// ----FILE SERVER----
//START
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'file');

// console.log(dirPath);

// const input = process.argv;

// if(input[2]=="add"){
//     fs.writeFileSync(dirPath+"/"+input[3],input[4])
//     console.log("file added successfully");

// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(dirPath+"/"+input[3])
//     console.log("file deleted successfully");
// }
// else{
//     console.log("Invalid Input");
// }

//END

// ****EXPRESS JS****

//----BASIC EXPRESS----
//START
// const express = require('express');

// const app = express();
// const port = 4500;

// app.get('/',(req,res)=>{
//     console.log("data recieved>>",req?req.query.name:"Nothing");
//     let moreText = req.query.name?",Welcome "+req.query.name:"";
//     res.send(`<h1>This is home page ${moreText}</h1> <a href="/about">Go to About</a>
//     <a href="/help">Go to Help</a>`);
// })
// app.get('/about',(req,res)=>{
//     res.send(`<input type="text" placeholder="User name"/>
//     <button>Click Me</button>`);
// })
// app.get('/help',(req,res)=>{
//     res.send([{name:"Sameed Sharif",job:"React native developer"},
//     {name:"Daniyal Sharif",job:"Front Sales Representative"}]);
// })
// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`);
// })
//END

//----EXPRESS WITH HTML PAGE----
//START
// const express = require('express');
// const path = require('path')
// const app = express();
// const publicPath = path.join(__dirname,"public");
// app.use(express.static(publicPath));
// app.listen(4500);
//END

//----REMOVE EXTENSION FROM URL----
//START
// const express = require('express');
// const path = require('path')
// const app = express();
// const publicPath = path.join(__dirname,"public");
// // app.use(express.static(publicPath));
// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// //this is the by default page if the user request for the page which is not found
// //request Not Found Page
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/notFound.html`)
// })
// app.listen(4500);
//END

//----EXLRESS WITH EJS----
//START
// const express = require('express');
// const path = require('path')
// const app = express();
// const publicPath = path.join(__dirname,"public");
// // app.use(express.static(publicPath));
// app.set('view engine','ejs');
// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// }) 
// app.get('/profile',(req,resp)=>{
//     const user={
//         name:"Sameed Sharif",
//         email:"Sameedsharif54@gmail.com",
//         city:'Karachi',
//         skills:['App development','web development','data science']
//     }
//     resp.render(`profile`,{user});
// })
// app.get('/login',(req,resp)=>{
//     resp.render('login');
// })
// app.listen(4500);
//END


//----MIDDLEWARE----
//START
// const express = require('express');
// const app = express();

// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please Enter Age")
//     }
//     else if(req.query.age<18){
//         resp.send("You don't have access to view this page")
//     }
//     else{
//         next();
//     }
// }
// app.use(reqFilter)

// app.get('/',(req,resp)=>{
//         resp.send('Welcome to Home Page');
//     })
// app.get('/users',(req,resp)=>{
//         resp.send('Welcome to Users Page');
//     })
// app.listen(4500);
//END

//----ROUTE LEVEL MIDDLEWARE---
//START
// const express = require('express');
// const app = express();
// const route = express.Router();


// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please Enter Age")
//     }
//     else if(req.query.age<18){
//         resp.send("You don't have access to view this page")
//     }
//     else{
//         next();
//     }
// }
// route.use(reqFilter);
// app.get('/',(req,resp)=>{
//         resp.send('Welcome to Home Page');
//     })
// //single Route Filter here
// app.get('/users',reqFilter,(req,resp)=>{
//         resp.send('Welcome to Users Page');
//     })
// route.get('/about',(req,resp)=>{
//         resp.send('Welcome to about Page');
//     })
// route.get('/contact',(req,resp)=>{
//         resp.send('Welcome to contact Page');
//     })
// app.use('/',route);
// app.listen(4500);
//END


//****MONGODB WITH NODE JS****

//----CONNECT WITH MONGODB----
//START
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = "e-comm"
// const client = new MongoClient(url);

// async function getData(){
//     let result =await client.connect()
//     let db = result.db(database);
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray()
//     console.log(response);
// }
// getData();
//END


//----READ DATA FROM MONGODB----
//START
// const dbconnect = require("./mongodb");
// const main = async()=>{
//     let data = await dbconnect();
//     //for getting all data use find() method and for finding specific data pass object in find() method
//     data = await data.find({name:'s21'}).toArray();
//     console.log(data);
// }
// main(); 
//END

//----INSERT DATA IN MONGODB----
//START
// const dbconnect = require('./mongodb');
// const insertData = async()=>{
//     let db = await dbconnect();
//     //for single insert use insertOne and for multiple insert use insertMany function.
//     const result = await db.insertMany(
//        [ {name:"note 10",brand:"Samsung",price:2000,category:"Mobile"},
//        {name:"note 12",brand:"Samsung",price:5000,category:"Mobile"},
//     ]
//     );
//     if(result.acknowledged){
//         console.log("data Inserted",result);
//     }
// }
// insertData();
//END

//----UPDATE DATA IN MONGODB----
//START
// const dbconnect = require('./mongodb');
// const updateData = async()=>{
//     const data =await dbconnect();
//     //use updateOne for single update and updateMany function for multiple update 
//     const result = await data.updateOne({name:'s21'},{
//         $set:{name:'s22',price:420}
//     });
//     console.log(result);
// }
// updateData();
//END


//----DELETE DATA FROM MONGODB----
//START
// const dbconnect = require('./mongodb');
// const deleteData = async()=>{
//     const data = await dbconnect();
//     //for single delete use deleteOne for multiple use deleteMany() 
//     const result = await data.deleteOne({name:'note 12'});
//     console.log(result);
// }
// deleteData();
//END


//****API WITH MONGODB*****

//----API FOR GETTING DATA----
//START
// const express = require('express');
// const dbconnect = require('./mongodb');
// const app = express();

// app.get('/', async(req, resp) => {
//     let data = await dbconnect();
//     data =await data.find().toArray();
//     console.log(data);
//     resp.send(data);
// })
// app.listen(4500);
//END

//----API FOR POST DATA----
//START
// const express = require('express');
// const dbconnect = require('./mongodb');
// const app = express();

// app.use(express.json());
// app.post('/',async (req,resp)=>{
//     let data = await dbconnect();
//     let result =await data.insertOne(req.body);
//     console.log(result);
//     resp.send(result);
// })

// app.listen(4500);
//END

//----API FOR PUT DATA----
//START

// const express = require('express');
// const dbconnect = require('./mongodb');
// const app = express();

// app.use(express.json());
// app.put('/:name',async(req,resp)=>{
//     let data = await dbconnect();
//     let result = await data.updateOne(
//         {name:req.params.name},
//         {$set:req.body}
//     )
//     console.log("result",result);
//     resp.send(result);
// })

// app.listen(4500);

//END

//----API FOR DELETE DATA----
//START
// const express = require('express');
// const dbconnect = require('./mongodb');
// const mongodb = require('mongodb')
// const app = express();

// app.use(express.json());
// app.delete('/:id', async(req, resp) => {
//     console.log(req.params.id);
//     const data = await dbconnect();
//     const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
//     resp.send("Delete Successfully");
// })

// app.listen(4500);
//END

//****GET STARTED WITH MONGOOSE****

//----CREATE IN DB USING MONGOOSE----
//START
// const mongoose = require('mongoose');
// const saveInDb =async()=>{
//     await mongoose.connect('mongodb://localhost:27017/e-comm')
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price:Number
//     })
//     const ProductModel = mongoose.model('products',ProductSchema);
//     let data = new ProductModel({name:"oppof11 pro",price:10000});
//     let result = await data.save();
//     console.log(result);
// }
// saveInDb();
//END

//----READ IN DB USING MONGOOSE----
//START
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm');
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// })
// const readInDb = async () => {
//     const ProductModel = mongoose.model('products', ProductSchema);
//     let data = await ProductModel.find({ name: "s22" });
//     console.log(data);
// }
// readInDb();
//END

//----UPDATE IN DB USING MONGOOSE----
//START
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm')
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price:Number,
//         brand:String,
//         category:String
//     })
// //you can also update data without using $set
// const updateInDb=async()=>{
//     const ProductModel = mongoose.model('products',ProductSchema);
//     const data = await ProductModel.updateMany(
//         {name:'oppof11 pro'},{
//         $set:{name:"c10",price:30000}})
//     console.log(data);
// }
// updateInDb();
//END

//----DELETE IN DB USING MONGOOSE----
//START
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm')
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// })
// const deleteInDB = async () => {
//     const ProductModel = mongoose.model('products', ProductSchema);
//     const data = await ProductModel.deleteMany(
//         { name: 'c10' })
//     console.log(data);
// }
// deleteInDB();
//END

//----POST,GET,PUT,DELETE API WITH MONGOOSE----
//MongooseCode=1
//START
// const express = require('express');
// require('./config');
// const Product = require('./Products');
// const app = express();
// app.use(express.json());
// app.post('/create', async (req, resp) => {
//     console.log("data", req.body);
//     let data = new Product(req.body);
//     let result = await data.save();
//     resp.send(result);
// })

// app.get('/list', async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);

// })
// app.delete('/delete/:_id', async (req, resp) => {
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);

// })
// app.put('/update/:_id', async (req, resp) => {
//     console.log(req.params);
//     let data = await Product.updateOne(
//         req.params,
//         { $set: req.body });
//     resp.send(data);

// })
// app.listen(4500);

//END

//----SEARCH API IN MONGOOSE----
//START
// const express = require('express');
// require('./config');
// const Product = require('./Products');
// const app = express();
// app.use(express.json());

// app.get('/search/:key',async(req,resp)=>{
//     console.log(req.params.key);
//     let data = await Product.find({
//         "$or":[
//             {name:{$regex:req.params.key}},
//             {brand:{$regex:req.params.key}}
//         ]
//     })
//     resp.send(data);
// })
// app.listen(4500);
//END

//----UPLOAD FILE IN NODE JS----
//START
// const express = require('express');
// const multer = require('multer');
// const app = express();

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,'file')
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+'-'+Date.now()+'.jpg');
//         }
//     })
// }).single('user_file');

// app.post('/upload',upload,(req,resp)=>{
//     resp.send("file uploaded successfully");
// })
// app.listen(4500);
//END


//----OS MODULE IN NODE JS----
//START
// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024)); //in megabyte
// console.log(os.totalmem()/(1024*1024)); //in megabyte
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());
//END

//----EVENT AND EVENT EMITTER----
//START
const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter()

let count = 0;
event.on('countApi', () => {
    count++;
    console.log("event called", count);
})

app.get('/', (req, resp) => {
    resp.send('connected');
    event.emit('countApi');
})
app.get('/search', (req, resp) => {
    resp.send('search api called');
})
app.get('/update', (req, resp) => {
    resp.send('update api called');
})
app.listen(4500);
//END