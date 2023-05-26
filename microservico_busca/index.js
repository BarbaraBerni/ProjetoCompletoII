const express = require ("express");
const app = express();
app.use(express.json());

const pesquisa = {};
const funcao = {
  usuarioNovo: (cadastro) => {
    pesquisa[cadastro.contador] = cadastro
  },
  /* 
  novaLocalizacao: (localizacao) => {
    const localizacao =
    pesquisa[localizacao.cadastroId]["Localizacao"]
    [];
    localizacao.push(localizacao);
    pesquisa[localizacao.cadastroId]['localizacao'] =
    localizacao;
  }
};
  */
}

app.get("/cadastro", (req,res) => {
  res.status(200).send(pesquisa);
}); /*Lógica da pesquisa*/
app.post("/eventos", (req, res) => {
  funcao[req.body.tipo](req.body.dados);
  res.status(200).send(pesquisa);
});
app.listen(4000, () => console.log("Consulta. Porta 4000"));