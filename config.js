module.exports = {
    api:{
        port: process.env.API_PORT || 3001,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'secreto',
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql10589678',
        password: process.env.MYSQL_PASS || 'bR1bEZIVgc',
        database: process.env.MYSQL_DB || 'sql10589678',
    }
}