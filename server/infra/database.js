const db = require('mysql-promise')();

db.configure({
    host: 'sql121.main-hosting.eu', // O host do banco. Ex: localhost
    user: 'u819601105_admin', // Um usuário do banco. Ex: user 
    password: 'netcaf00', // A senha do usuário. Ex: user123
    database: 'u819601105_finan' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
})

module.exports = db