const express=require("express");
const app=express();
const connectDB=require("./db");
const port=process.env.PORT || 5000;





connectDB()
.then(()=>{
    console.log("database is connected");
    app.listen(port,()=>{
        console.log(`server is successfully listening at port ${port}`);
    })
})
.catch((err)=>{
      console.log("database can not be connected!!")
})