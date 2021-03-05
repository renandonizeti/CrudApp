module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'employeesystem',
            dialect: 'mysql',
            user: 'root',
            password: 'rdcs4921'
        }

    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}