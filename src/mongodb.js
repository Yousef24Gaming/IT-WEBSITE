const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yukitodb:v8gdc1,Z6%40lI$AT9Ju(%7C@yukito24.hwqeflm.mongodb.net/"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("faild to connect mongodb");
  });
const LogInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const collection = new mongoose.model("Collection1", LogInSchema);
module.exports = collection;
