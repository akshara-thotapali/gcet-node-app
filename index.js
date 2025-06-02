import express from "express";
import cors from 'cors'
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});
app.use(cors())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.get("/greet",(req,res)=>{res.send("Greetings")})

app.get("/name",(req,res)=>{res.send("AKSHARA THOTAPALLI")})

app.get("/weather",(req,res)=>{res.send("31degree")})

app.get("/products",(req,res)=>{
    const products =[
        {name:"poduct 1",price:334},
        {name:"product 2",price:224},
        {name:"product 3",price:556},
    ];
    res.json(products);
});


// import express from "express";
// import cors from "cors";
// const app = express();
// app.listen(8080, () => {
//   console.log("Server Started on port 8080");
// });

// app.use(express.json());
// app.use(cors());
// const users = [];

// app.get("/", (req, res) => {
//   return res.json(users);
// });

// app.post("/register", (req, res) => {
//   const { name, email, pass } = req.body;
//   users.push({ name, email, pass });
//   return res.json(users);
// });

// app.post("/login", (req, res) => {
//   const { email, pass } = req.body;
//   const found = users.find(
//     (value) => value.email === email && value.pass === pass
//   );
//   if (!found) {
//     res.json({message:"User not found"})
//   }
//   res.json({...found,token:"123"});
// });