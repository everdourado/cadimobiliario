const express = require("express");
const app = express();

//cria o módulo de rotas
const connectDatabase = require("./src/database/db")

const userRoute = require("./src/routes/user.route")

const port = 3000;

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));