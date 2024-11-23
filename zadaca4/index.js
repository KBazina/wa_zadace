import express from "express"
import dohvat from "./catch.js"
const app=express()
app.use(express.json())

app.get("/zaposlenici",dohvat)
app.get("/zaposlenici/:id",dohvat)
app.post("/dodaj",dohvat)
app.listen(3000,error=>{
console.log("radi")
})