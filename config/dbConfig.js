import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const usr = process.env.MONGODB_USR
const pwd = process.env.MONGODB_PWD
const dbname = process.env.MONGODB_DATABASE

mongoose.connect(`mongodb+srv://${usr}:${pwd}@cluster0.amg1p.mongodb.net/${dbname}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, 
(err) => {
    if (!err) console.log('successfully connected to the database')
    else console.log('Failed to connect to db:' + err)
})