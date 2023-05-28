const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.json());


let cadastro = {
nome: "nome: ",
cpf: "CPF: ",
endereco: "Endereço: ",
telefone: "Telefone: ",
email: "E-mail: ",
senha: "Senha: ",
};

const axios = require("axios")


app.put ('/cadastro', (req, res) => { //Aqui  o POST é uma rota para /cadastro que esta no terminal e dai */
    
    const { nome, cpf, endereco, telefone, email, senha } = req.body;
    cadastro = {
        nome, cpf, endereco, telefone, email, senha};
        cadastro = { nome, cpf, endereco, telefone, email,senha, };
        res.status(201).send(cadastro);
});
app.post ('/eventos', async (req, res) => {
const { tipo, dados } = req.body;
if (tipo === "Usuario01") {
    await axios.post("http://localhost:9000/eventos", {
        tipo: "Usuario01",
        dados: {
            nome: dados.nome,
            cpf: dados.cpf,
            endereco: dados.endereco,
            telefone: dados.telefone,
            email: dados.email,
            senha: dados.senha,

},
    });
}

res.status(200).send("Usuario cadastro com sucesso!");
});
        
       /* nome: "Maria",
        idade: "" ,
        email: " @gmail.com",
        senha: " ",
        cpf: "   .   .   -  "*/
app.listen (4000, () => {
    console.log('Cadastro rodando na Porta 4000')
});

