const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost:27017/Blog-test-db")
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

const BlogSchema = new Schema({
  title: String,
  description: String,
  postedby: String,
  createdAt: {
    type: Date,
    default: Date.now, // Varsayılan olarak oluşturulduğu zamanı alır
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
