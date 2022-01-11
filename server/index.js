import express from 'express'
const app =express()
import Connection from './connection/db.js';
import defaultData from "./default.js";
import Router from "./routes/routes.js";
Connection()
app.use('/',Router);
// require('./connection/db')
defaultData();
app.listen(8000,()=>{
   console.log("Server is runnig on port 8000"); 
})