const express = require("express");

const app = express();

app.use(express.json());

let cursos = ["Curso 1", "Curso 2"];

app.get("/", (req, res) => {
  return res.json(cursos);
});
app.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

app.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

app.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

app.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: `O curso - ${cursos[index]} - foi deletado` });
});

app.listen(3232, () => console.log("Server ok"));
