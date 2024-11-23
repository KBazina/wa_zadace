import express from "express";
import fs from "fs/promises";
const router = express.Router();

router.get("/zaposlenici", async (req, res) => {
  const kjueri = req.query;
  try {
    const dxata = await fs.readFile("zaposlenici.json", "utf8");
    let zaposlenici = JSON.parse(dxata);
    console.log(kjueri);
    Object.keys(kjueri).forEach((q) => {
      console.log(kjueri.pozicija);
      switch (q) {
        case "sort":
          zaposlenici.sort((a, b) => b.godine - a.godine);
          break;
        case "pozicija":
            console.log("korucnia")
            zaposlenici = zaposlenici.filter((zaposlenik) => zaposlenik.pozicija === kjueri.pozicija);
          break;
          case "min_god":
            zaposlenici = zaposlenici.filter((zaposlenik) => zaposlenik.godine > kjueri.min_god);
      }
    });

    res.status(200).send(zaposlenici);
  } catch (error) {
    console.log("nesto je krivo");
    res.status(500).send("nije dobro dohvaceno");
  }
});

router.get("/zaposlenici/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const zaposlenici = await fs.readFile("zaposlenici.json", "utf8");
    const zaposlenik = JSON.parse(zaposlenici).find((z) => z.id == id);
    if (zaposlenik) {
      res.status(200).send(zaposlenik);
    } else res.status(400).send("ALO GRESKA ne postoji taj id");
  } catch (error) {
    console.log("nesto je krivo");
    res.status(500).send("nije dobro dohvaceno");
  }
});

router.post("/dodaj", async (req, res) => {
  const noviZ = req.body;
  try {
    const zaposlenici = await fs.readFile("zaposlenici.json", "utf8");
    const noviZapos = JSON.parse(zaposlenici);
    let newId = noviZapos.length;
    while (noviZapos.find((z) => z.id == newId)) {
      newId++;
    }
    noviZ.id = newId;
    noviZapos.push(noviZ);
    await fs.writeFile("zaposlenici.json", JSON.stringify(noviZapos), "utf8");
    res.status(201).send(noviZapos);
  } catch (error) {
    console.log("nesto je krivo");
    res.status(500).send(error);
  }
});

export default router;
