const Sequelize = require('sequelize');

const sequelize = new Sequelize("node", "root", "123", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

sequelize.authenticate()
.then(function() {
    console.log('conexão estabelecida com sucesso!');
}).catch(function(){
    console.log('Erro: Conexão falhou');
});

module.exports = sequelize;