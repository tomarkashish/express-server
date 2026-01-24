const express=require("express");
module.exports=(students)=>{
const router=express.Router();
router.get("/",(req,res)=>{
const names=students.map(s=>s.name).join(",");
res.send(`Students:${names}`);
});
router.get("/:id", (req, res)=>{
const id=parseInt(req.params.id);
const students=students.find(s=>s.id===id);
if(student){
res.send(`Student:${student.name}`);

}else{
res.send("Student not found");
}
});
return router;
};