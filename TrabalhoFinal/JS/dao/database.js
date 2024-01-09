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
        db.run(`CREATE TABLE IF NOT EXISTS livros (
            isbn text PRIMARY KEY,
            titulo text, 
            autor text,
            nota float           
            )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.error(err)
                } else {                   
                    console.debug('Tabela de livros criada.');

                }
            });
           
    }
});

export default db
       
