class Proizvod {
  constructor(id, naziv, cijena, velicine, opis, slike) {
    this.id = id;
    this.naziv = naziv;
    this.cijena = cijena;
    this.velicine = velicine;
    this.opis = opis;
    this.slike = slike;
  }
}
const proizvodi = [
  new Proizvod(
    1,
    "Obična crna majica",
    80,
    ["XS", "S", "M", "L"],
    "Opis 1 opis opi opi opi opiss opis Opis 1 opis opi opi opi opiss opis Opis 1 opis opi opi opi opiss opis",
    [
      "https://i00.eu/img/726/1024x1024/2ul0znjr/18488.jpg",
      "https://www.bolf.com.hr/scr_pl_Crna-obicna-muska-majica-Bolf-MT3001-90846_4.jpg",
      "https://lumer-shop.eu/wp-content/uploads/2024/02/di-si-lipa-jpg.webp",
      "https://krav-maga.hr/upload/catalog/product/160/dje-ja-majica-kratkih-rukavajpg-_5b0ebd0c16abd.jpg",
    ]
  ),
  new Proizvod(
    2,
    "Levi's 501 traperice",
    110,
    ["S", "M", "L"],
    "opis druge slike",
    [
      "https://europa92.eu/upload/catalog/product/6930/thumb/2e564484-68e4-42f1-9491-7f9d98c222ec_661b1f00e2b74_990xr.webp",
      "https://europa92.eu/upload/catalog/product/6930/thumb/2e564484-68e4-42f1-9491-7f9d98c222ec_661b1f00e2b74_990xr.webp",
      "https://europa92.eu/upload/catalog/product/6930/thumb/2e564484-68e4-42f1-9491-7f9d98c222ec_661b1f00e2b74_990xr.webp",
      "https://europa92.eu/upload/catalog/product/6930/thumb/2e564484-68e4-42f1-9491-7f9d98c222ec_661b1f00e2b74_990xr.webp",
    ]
  ),
  new Proizvod(3, "Zimska kapa", 40, "onesize", "opis trece slike", [
    "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/8/1/8187O-MLC-010-1-565071_3.jpg",
    "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/8/1/8187O-MLC-010-1-565071_3.jpg",
    "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/8/1/8187O-MLC-010-1-565071_3.jpg",
    "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/8/1/8187O-MLC-010-1-565071_3.jpg",
  ]),
  new Proizvod(
    4,
    "Čarape Adidas",
    20,
    ["34-36", "37-39", "40-42"],
    "opis cetvrte slike",
    [
      "https://gfx.r-gol.com/media/res/products/823/159823/ic1311_1.jpg",
      "https://gfx.r-gol.com/media/res/products/823/159823/ic1311_1.jpg",
      "https://gfx.r-gol.com/media/res/products/823/159823/ic1311_1.jpg",
      "https://gfx.r-gol.com/media/res/products/823/159823/ic1311_1.jpg",
    ]
  ),
  new Proizvod(
    5,
    "Tenisice Nike",
    200,
    ["38", "39", "40", "41", "42", "43", "44", "45"],
    "opis zadnje slike",
    [
      "https://www.sportvision.hr/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp",
      "https://www.sportvision.hr/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp",
      "https://www.sportvision.hr/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp",
      "https://www.sportvision.hr/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp",
    ]
  ),
];
export { proizvodi, Proizvod };
