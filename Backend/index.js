import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

import dotenv from 'dotenv';
const app=express();
dotenv.config();
app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend.onrender.com"], 
  credentials: true
}));


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());



app.use('/posts',postRoutes);



// app.get('/',(req,res)=>{
//     res.send('Hello to Memories API');
// });
//inside the Backend folder add a .gitignore file and add node_modules in it


const PORT =process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL)
.then(
    ()=>
            app.listen(PORT,()=> {console.log(`Server running on port: ${PORT}`)})
 )
.catch((error)=>console.log('mongodb not connected',error.message));
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
// console.log(`${PORT}`);


