module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api:{
        port: process.env.API_PORT || 3000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'secreto',
    },
    mysql:{
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || 'sql10589678',
        password: process.env.MYSQL_PASS || 'bR1bEZIVgc',
        database: process.env.MYSQL_DB || 'sql10589678',
    },
    mysqlService:{
        host: process.env.MYSQL_SRV_HOST || 'https://andres990127-literate-pancake-954j69wgx7qfp4x-3002.preview.app.github.dev/',
        port: process.env.MYSQL_SRV_PORT || 3002,
    },
    post: {
        port: process.env.POST_PORT || 3003, 
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'https://andres990127-literate-pancake-954j69wgx7qfp4x-3002.preview.app.github.dev/',
        port: process.env.MYSQL_SRV_PORT || 3004,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-17611.c10.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 17611,
        password: process.env.REDIS_PASS || 'zH2Pv5q5PLOL4V4cuTBStlnoHlCp9Zhn',
    }
}