const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const Photo = require("./models/Blog");
const Blog = require("./models/Blog");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://localhost:27017/Blog-test-db")
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

//static dosyalar için
app.use(express.static("public"));
//html ler için dinamizm katar ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method")); // HTML'de DELETE içi

app.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Sayfa numarasını al, varsayılan 1
  const limit = 2; // Sayfa başına kaç blog gösterilecek
  const skip = (page - 1) * limit; // Atlama miktarını hesapla
  const totalBlogs = await Blog.countDocuments(); // Toplam blog sayısını al
  const totalPages = Math.ceil(totalBlogs / limit); // Toplam sayfa sayısını hesapla

  const blogs = await Blog.find({})
    .sort({ createdAt: -1 }) // Yeni blogları önce göster
    .skip(skip) // Atlama miktarı kadar atla
    .limit(limit); // Belirlenen limit kadar al

  const formattedBlogs = blogs.map((blog) => ({
    ...blog._doc,
    createdAt: blog.createdAt.toLocaleDateString("tr-TR"),
  }));

  res.render("index", {
    blogs: formattedBlogs,
    currentPage: page,
    totalPages: totalPages,
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
//TEKİL SATFALAR İÇİN
app.get("/blog/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id); // ID'ye göre blog bul
  res.render("post", { blog });
});
app.delete("/blog/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/"); // Silindikten sonra anasayfaya yönlendir
});
app.get("/blog/:id/edit", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("edit", {
    blog,
  });
});
app.put("/blog/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      postedby: req.body.postedby,
    });

    res.redirect("/"); // Güncelleyince ana sayfaya yönlendir
  } catch (error) {
    console.error(error);
    res.status(500).send("Güncelleme sırasında hata oluştu!");
  }
});

app.get("/add_post", (req, res) => {
  res.render("add_post.ejs");
});
app.get("/post", (req, res) => {
  res.render("post.ejs");
});
app.post("/blogs", async (req, res) => {
  await Blog.create(req.body); //burda formdan igrilen veriyi veritabanında dokumana donusturuyoruz
  res.redirect("/");
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor...`));
