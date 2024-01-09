import express from 'express'
import db from '../dao/database.js'

const rotas = express.Router()

//Criando estudante
rotas.post("/api/estudante", async (req, res, next) => {
    const errors = []
   
    //Abaixo, se virar true, é porque era false, então entra no if
    if (!req.body.nome) {
        errors.push("Nome não informado / Nome specified");
    }
    if (!req.body.email) {
        errors.push("E-mail não informado / No email specified");
    }
    /*
    if (!req.body.senha) {
        errors.push("Senha não informada / No password specified");
    }*/
    if (errors.length) {
        res.status(400).json({ "error": errors.join(" e ") });
        console.error('Erro ao inserir estudante', errors)
        return;
    }
    //Se tudo der certo, não terá retornado ainda, então, 
    //continua a processar a requisição:
    const data = {
        nome: req.body.nome,
        email: req.body.email
    }
    
    //Persistindo no BD
    const sql = 'INSERT INTO estudantes (nome, email) VALUES (?,?)'
    const params = [data.nome, data.email]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    });


})

//consultando estudantes
rotas.get("/api/estudantes", (req, res, next) => {
    console.log('Estudante ' + req.idUsuario + ' acessando a rota get estudantes');
    const sql = "select * from estudantes"

    db.all(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ "Error: ": err.message });
            return;
        }
        res.json({
            "mensagem": "sucesso",
            "data": rows

        })
    });
});

export default rotas