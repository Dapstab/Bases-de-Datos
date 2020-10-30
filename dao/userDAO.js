const { ObjectId } = require('mongodb');
const ConnectionDAO = require('./connectionDAO');

let Usuarios, Usuario;

module.exports = class UserDAO {
    static async getUser(req, res) {
        Usuarios = await ConnectionDAO.connectDatabase(req, res, 'Usuarios');// base de datos
        Usuario = await ConnectionDAO.connectCollection(req, res, 'Usuario'); // colleción
        const resultado = await Usuario.findOne( { _id: ObjectId(req.params.id) });
        res.json(
            resultado
        );
    }
    static async addUser(req, res) {
        Usuarios = await ConnectionDAO.connectDatabase(req, res, 'Usuarios');// base de datos
        Usuario = await ConnectionDAO.connectCollection(req, res, 'Usuario'); // colleción
        const resultado = "Se agregó correctamente el usuario a la base de datos";

        await Usuario.insertOne(req.body);
        res.json(
            resultado
        );
    }
    static async getUsers(req, res) {
        Usuarios = await ConnectionDAO.connectDatabase(req, res, 'Usuarios');// base de datos
        Usuario = await ConnectionDAO.connectCollection(req, res, 'Usuario'); // colleción
        const resultado = await Usuario.find().toArray();
        res.json(
            resultado
        );
    }
    static async addUsers(req, res) {
        Usuarios = await ConnectionDAO.connectDatabase(req, res, 'Usuarios');// base de datos
        Usuario = await ConnectionDAO.connectCollection(req, res, 'Usuario'); // colleción
        const resultado = "Se agregó correctamente el usuario a la base de datos";

        await Usuario.insertMany(req.body);
        res.json(
            resultado
        );
    }
}