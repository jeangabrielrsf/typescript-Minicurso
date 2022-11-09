import express from "express";
import { convertSalary } from "./controllers/calculator.controller.js";
var server = express();
server.get("/status", function (req, res) {
    res.send("Tudo ok");
});
server.get("/calculator", convertSalary);
server.listen(4000, function () {
    console.log("to rodando!!!");
});
