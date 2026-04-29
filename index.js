const express = require("express");

const app = express();

app.use(express.json());

const products  = [
    {id:1 , nom: "Clavier" , prix : 150},
     {id:2 , nom: "Souris" , prix : 80}
];
const users =[
    {id:1 ,prenom:"azad", nom:"gulam hussain"},
    {id:2 ,prenom:"unes",nom:"Tareq"},
    {id:3 ,prenom:"fatima e zzahra", nom:"mouatassim"}
];
app.get("/",(req,res) => {
    res.send("Hello, in my API");
});
app.get("/users",(req,res) =>{
    res.json(users);
});
app.get("/products",(req,res) => {
    res.json(products);
});
app.get("/health",(req,res) => {
    res.send("verified app");
});

app.listen(3000, () => {
    console.log("Listen on http://localhost:3000");
})