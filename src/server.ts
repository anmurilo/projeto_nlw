import express, { response } from "express";

const app = express();
const port = 3333;

app.get("/", (request, response) => {
    let msg = "Olá NLW 05";
    //response.send(msg);
    response.json({
        message: msg
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário cadastrado com sucesso"
    });
});

app.listen(port, () => console.log("Server is running on port " + port));