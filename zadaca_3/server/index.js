import express from "express";
import porizvodiRouter from "./routes/proizvodi.js";
import narudzbeRouter from "./routes/narudzbe.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/proizvodi",porizvodiRouter)
app.use("/narudzbe",narudzbeRouter)
app.use(express.json())
const PORT = 3000;
app.get("/", (req, res) => {
  res.status(200).json("okej");
});

app.listen(PORT, (error) => {
  if (error) {
    console.error("greska");
  }
  console.log("radi");
});
