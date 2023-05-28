{/*MICROSERVICO CRIADO A PARTE
*/}
{/*esses const's são para enviar os eventos para os microservicos*/}
const express = require('express');
const bodyParser = require('body-parser');
{/*AXIOS É UMA BIBLIOTECA, PARA REQUISIÇÃO HTTP, SIMPLIFICA O PROCESSO DE SOLICITAR HTTP*/}
const axios = require('axios');

const app = express();{/*Aqui são as rotas de configuração */}
app.use(bodyParser.json()); {/*analisa o corpo das solicitações HTTP*/}


app.post('/eventos', (req, res) => {
    const evento = req.body;
    axios.post('http://localhost:4000/eventos', evento); {/*Barramento do cadastro */}
    axios.post('http://localhost:4000/eventos', evento); {/*Barramento localizacao */}
    axios.post('http://localhost:4000/eventos', evento); {/*Envia o evento para o microservico de busca */}
    res.status(200).send({msg: 'ok'});

});
app.listen(10000, () => {
    console.log('Barramento de eventos de cadastro e localizacao. Posta 10000.')
})