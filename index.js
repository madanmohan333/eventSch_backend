require('dotenv').config();
const express=require("express");
const app=express();
// const cors = require("cors");
const connectDB=require("./db");
// const path = require('path');
const port=process.env.PORT || 5000;

// app.use(cors());

app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/event", require("./routes/event"));
// app.use("/api/chat", require("./routes/chats"));
// app.use("/api/meet", require("./routes/meets"));
// app.use("/api/sendmail", mailRoute);



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