const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database.js');
const routes = require('./src/routes/routes.js');
const cors = require('cors');

const app = express ();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/system', routes);

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

sequelize.sync({force: false}).then ( () => {
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port); 
});