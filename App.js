const express = require("express");
const cors = require("cors");

const dbconnection = require("./Config/dbconnection");
const app = express();
const AdminRoutes=require("./Routes/AdminRoutes")
const UserRoutes=require("./Routes/UserRoutes")
dbconnection.dbConnect();
const PORT = 4000;
app.listen(PORT, ()=>{
console.log(`server started at port ${PORT}`)
});
app.use("/",UserRoutes)
app.use("/",AdminRoutes)