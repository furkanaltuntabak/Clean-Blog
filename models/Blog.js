const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = Blog;
