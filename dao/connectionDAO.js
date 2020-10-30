let client, database, collection;
module.exports = class ConnectionDAO {
    static injectConnection(conn) {
        client = conn;
    }
    // cluster.database.collection
    static async connectDatabase(req = {}, res = {}, db = "") {
        database = await client.db('Usuarios'); 
        return database;
    }
    static async connectCollection(req = {}, res = {}, db = "") {
        collection = await database.collection('Usuario');
        return collection;
    }
}