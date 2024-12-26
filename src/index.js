const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname, "../templates");
const collection = require("./mongodb");
const e = require("express");
const port = 3000;

app.use(
  session({
    secret: "cg]SD{Ty^07Z)$82@GHR-z`}",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("home", { user: req.session.user });
});
app.get("/home", (req, res) => {
  res.render("home", { user: req.session.user });
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/signup", async (req, res) => {
  const data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  const user = await collection.findOne({ email: req.body.email });
  if (user) {
    return res.render("signup", { error: "Email already registered" });
  } else {
    await collection.insertMany([data]);
    res.redirect("/login");
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await collection.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      req.session.user = user;
      res.redirect("/home");
    } else {
      return res.render("login", { error: "Invalid credentials" });
    }
  } catch {
    res.send("wrong details");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.redirect("/");
  });
});
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log("port connected");
});
