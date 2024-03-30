import pgpConstructor from "pg-promise";


const initOptions = {};


const pgp =  pgpConstructor(initOptions);

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: "dummy_ahl_db",
    user: 'user1',
    password: 'password',
});

export default db