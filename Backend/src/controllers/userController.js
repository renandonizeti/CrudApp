const User = require('../models/user.js');
const status = require('http-status');


exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    const adress = req.body.adress;

    User.create ({
        name: name,
        contact: contact,
        email: email,
        adress: adress
    })
    .then(user => {
        if(user){
            res.status(status.OK).send (user);
        }else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.SearchAll = (req, res, next) => {
    User.findAll()
    .then(user => {
        if(user){
            res.status(status.OK).send(user);
        }
    })
    .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
    .then(user => {
        if(user){
            res.status(status.OK).send(user);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    const adress = req.body.adress;

    User.findByPk(id) 
    .then(user => {
        if (user) {
            user.update ({
                name: name,
                contact: contact,
                email: email,
                adress: adress,
            },
            {
                where: {id: id}
            })
            .then( () => {
                res.status(status.OK).send();
            })
            .catch(error => next(error));
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}
exports.Delete = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
    .then(user => {
        if(user){
            user.destroy({
            where: {id: id}
            })
            .then( () => {
                res.status(status.OK).send();
            })
            .catch(error => next(error));
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));   
}
