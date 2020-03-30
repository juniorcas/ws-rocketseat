const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // Criar a tabela  
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            image TEXT, 
            title TEXT,
            category TEXT, 
            description TEXT,
            link TEXT
        );
    `)
    // Inserir dado na tabela 
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programacao",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore perferendis ",
        "https://rocketseat.com.br"
    ]
    db.run(query, values)

    // Consultar dados na tabela

    // Deletar um dado da tabela 

})