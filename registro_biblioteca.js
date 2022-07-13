//const Client = require('pg').Client;
const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mesa27',
    database: 'biblioteca'
};

//Variável alterada no registro e na devolução de livros.
alugados: 0

//Criando a função para cadastro de livros:
function inserirLivros(livro, callback) {
    const addlivro = new Client(conexao);
    addlivro.connect();

    const sql = "INSERT INTO livros(ISBN, NOME, AUTORES, EDITORA, ANO, ALUGADO, ALUGADOR) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [livro.ISBN, livro.NOME, livro.AUTORES, livro.EDITORA, livro.ANO, livro.ALUGADO, livro.ALUGADOR];

    addlivro.query(sql, values, 
        function (err, res){
            console.log(err);
            callback(err, res.rows[0]);
            addlivro.end();
        })

}


//Criando a função para inserir autores.
function inserirAutores(autor, callback) {
    const addautores = new Client(conexao);
    addautores.connect();

    const sql = "INSERT INTO autores(NOME, PAIS) VALUES ($1, $2) RETURNING *";
    const values = [autor.NOME, autor.PAIS];

    addautores.query(sql, values, 
        function (err, res){
            console.log(err);
            callback(err, res.rows[0]);
            addautores.end();
        })

}

//Criando a função para inserir clientes:
function inserirClientes(cliente, callback) {
    const addclientes = new Client(conexao);
    addclientes.connect();

    const sql = "INSERT INTO clientes(MATRICULA, NOME, TELEFONE, RETIRADAS) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [cliente.MATRICULA, cliente.NOME, cliente.TELEFONE, cliente.RETIRADAS];

    addclientes.query(sql, values, 
        function (err, res){
            console.log(err);
            callback(err, res.rows[0]);
            addclientes.end();
        })

}


//Função que autentifica se existe um usuário registrado no sistema.
function AutentificarUsuario(callback) {
    const lerusuario = new Client(conexao);
    lerusuario.connect();
    
    const sql = "SELECT * FROM usuario";
    lerusuario.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let usuario = res.rows;
                callback(undefined, usuario);     
            }
            lerusuario.end();
        }
    )    
}

//Função que exibe of livros registrados no sistema.
function LivrosDisponiveis(id, callback) {
    const lerlivros = new Client(conexao);
    lerlivros.connect();
    
    const sql = "SELECT * FROM livros WHERE alugado=$1";
    const values = [id];
    lerlivros.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let livros = res.rows;
                callback(undefined, livros);     
            }
            lerlivros.end();
        }
    )    
}

//Função que exibe os usuários registrados.
function AutentificarUsuario(callback) {
    const lerusuario = new Client(conexao);
    lerusuario.connect();
    
    const sql = "SELECT * FROM usuario";
    lerusuario.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let usuario = res.rows;
                callback(undefined, usuario);     
            }
            lerusuario.end();
        }
    )    
}

//Função que busca os livros registrados sobre um autor específico.
function buscarPorAutor(id, callback){
    const livrosAutor = new Client(conexao);
    livrosAutor.connect();
    
    const sql = "SELECT * FROM livros WHERE editora=$1";
    const values = [id];

    livrosAutor.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let livros = res.rows[0];
                callback(undefined, livros);
            }
            else {
                const error = "Livro não encontrado";
                callback(error, undefined);
            }

            livrosAutor.end();
        }
    )    
}

function atualizarRetiradas(id, livro, callback) {
    const Retiradas = new Client(conexao);
    Retiradas.connect();

    const sql = "UPDATE livros SET ISBN=$1, NOME=$2, AUTORES=$3, EDITORA=$4, ANO=$5, ALUGADO=$6, ALUGADOR=$7 WHERE ISBN=$8 RETURNING *"
    const values = [livro.ISBN, livro.NOME, livro.AUTORES, livro.EDITORA, livro.ANO, livro.ALUGADO, livro.ALUGADOR, id];

    Retiradas.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let produto = res.rows[0];
            callback(undefined, produto);
        }
        else {
            const error = "Livro não encontrado";
            callback(error, undefined);
        }

        Retiradas.end();        
    })
}



function deletarLivros(id, callback) {
    const deletarlivro = new Client(conexao);
    deletarlivro.connect();

    const sql = "DELETE FROM livros WHERE NOME=$1 RETURNING *"
    const values = [id];

    deletarlivro.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let livro = res.rows[0];
            callback(undefined, livro);
        }
        else {
            const error = "Valor não encontrado";
            callback(error, undefined);
        }

        deletarlivro.end();        
    })

}
