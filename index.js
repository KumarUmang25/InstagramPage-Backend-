const express=require("express");
const app=express();
const path=require("path");

let port=8080;

app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    res.render("instagram.ejs",{data:instaData[username]});
});
