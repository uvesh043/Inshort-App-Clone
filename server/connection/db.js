import mongoose from "mongoose";
const URL='mongodb://localhost/news'
const Connection=async ()=>{
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       }).then(()=>{console.log('Connection is Succesfully with database')}).catch(()=>{
           console.log("NOT connected with database");
       });
} catch (error) {
    console.log("Error while connecting with database",error);
}

}
export default Connection;