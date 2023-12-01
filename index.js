/*const express = require("express");
const connectDatabase = require("./src/database/db")
//cria o módulo de rotas
const userRoute = require("./src/routes/user.route")*/

import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();



const port = 3000;
const app = express();

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));