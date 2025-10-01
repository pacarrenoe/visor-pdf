const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // 👈 CORREGIDO
app.use(expressLayouts);
app.set("layout", "layouts/main");

// estáticos
app.use(express.static(path.join(__dirname, "../public")));

// rutas
app.get("/", (req, res) => res.render("index", { title: "Home" }));
app.get("/lector", (req, res) => res.render("lector", { title: "Lector" }));
app.get("/conversor", (req, res) => res.render("conversor", { title: "Conversor" }));

module.exports = app;
