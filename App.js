const express = require("express");
const cors = require("cors");

const dbconnection = require("./Config/dbconnection");
const app = express();
const AdminRoutes=require("./Routes/AdminRoutes")
const UserRoutes=require("./Routes/UserRoutes")




dbconnection.dbConnect();
const PORT = 4000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/",UserRoutes)


app.listen(PORT, ()=>{

console.log(`server started at port ${PORT}`)
});
// app.use("/",AdminRoutes)