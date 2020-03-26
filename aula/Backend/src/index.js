const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cor());
app.use(express.json());

app.use(routes);

/*
*Rota / Recurso
*/

/**
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: ALTERAR UMA INFORMAÇÕA NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query:Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333)