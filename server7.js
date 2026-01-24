const express=require("express");
const app=express();
app.use(express.json());

const students=[
{id: 1, name: "Ram"},
{id:2, name:"Shri"},
{id:3, name:"krish"}

];
const courses=[
{id:1, name:"Frontend",description:"HTML, CSS, JS, React"},
{id:2, name:"Backend", description:"node.js, express, mongodb"}
];
const studentRoutes=require("./routes/studentRoutes");
const courseRoutes=require("./routes/courseRoutes");

app.get("/", (req, res)=>{
res.send("Welcome to the student and course portal api!");
});
app.use("/students", studentRoutes(students));
app.use("/courses", courseRoutes(courses));

app.use((req, res)=>{
res.status(404).send("Page not found");
});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});