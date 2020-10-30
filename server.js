//TODO LO DE LAS CONEXIONES
const { MongoClient } = require('mongodb');
const app = require('./index');
const dotenv = require('dotenv');
const ConnectionDAO = require('./dao/connectionDAO');

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT || 8080;

const client = new MongoClient(process.env.URI, { useUnifiedTopology: true }); 
//console.log(client);
run().catch(console.dir);

async function run() {
    try {
        const connection = await client.connect();
        await ConnectionDAO.injectConnection(connection);
    } 
    finally {
        console.log("hello");
    }
}


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });