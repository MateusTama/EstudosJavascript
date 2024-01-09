import express from 'express'
import db from '../dao/database.js'

const rotas = express.Router()

//Criando estudante
rotas.post("/api/livro", async (req, res, next) => { //POST
    const errors = []
   
    //Abaixo, se virar true, é porque era false, então entra no if
    if (!req.body.isbn) {
        errors.push("ISBN não informado / No ISBN specified");
    }
    if (!req.body.titulo) {
        errors.push("Título não informado / No title specified");
    }
    if (!req.body.autor) {
        errors.push("Autor não informado / No author specified");
    }
    if (!req.body.nota) {
        errors.push("Nota não informado / No Rate specified");
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
        isbn: req.body.isbn,
        titulo: req.body.titulo,
        autor: req.body.autor,
        nota: req.body.nota
    }
    
    //Persistindo no BD
    const sql = 'INSERT INTO livros (isbn, titulo, autor, nota) VALUES (?,?,?,?)'
    const params = [data.isbn, data.titulo, data.autor, data.nota]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data
        })
    });

})

//consultando estudantes
rotas.get("/api/livros", (req, res, next) => { //GET
    const sql = "select * from livros" 
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