import express from "express";
import { convertCLTToPJ } from "./controllers/calculator.controller.js";

const server = express();

server.get("/status", (req, res) => {
	res.send("Tudo ok");
});

server.get("/calculator", convertCLTToPJ);

server.listen(4000, () => {
	console.log("to rodando....");
});
