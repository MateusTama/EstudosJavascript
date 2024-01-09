import sqlite3 from 'sqlite3'


const DBSOURCE = "db.sqlite"
sqlite3.verbose()
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS estudantes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text, 
            email text UNIQUE,           
            CONSTRAINT email_unique UNIQUE (email)
            )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.error(err)
                } else {                   
                    console.debug('Tabela de estudantes criada.');

                }
            });
           
    }
});

export default db
       
