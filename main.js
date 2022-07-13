const cadastroBiblioteca = require('./registro_biblioteca.js')

/*  cadastroBiblioteca.inserirLivros({ISBN: 27564, NOME: "Python para Iniciantes", AUTORES: "Matias Ferreira", EDITORA: "Brasil Livros", ANO: "2020", ALUGADO: "Não", ALUGADOR: "Nenhum"},
    function(err, produtoInserido) {
        console.log("INSERINDO livro...")
        if(err) {
            console.log("Falha no sistema.");
            console.log(err);
        }
        else {
            console.log("Livro inserido: ");
            console.log(produtoInserido);
        }
    }); 
 */

/* cadastroBiblioteca.inserirAutores({NOME: "João Cardoso", PAIS: "Brasil"},
    function(err, produtoInserido) {
        console.log("Inserindo autor...")
        if(err) {
            console.log("Falha no sistema.");
            console.log(err);
        }
        else {
            console.log("Autor inserido: ");
            console.log(produtoInserido);
        }
    }); */

/* cadastroBiblioteca.inserirClientes({MATRICULA: 147569, NOME: "Brasil", TELEFONE: 99567153, RETIRADAS: 0},
    function(err, produtoInserido) {
        console.log("Inserindo cliente...")
        if(err) {
            console.log("Falha no sistema.");
            console.log(err);
        }
        else {
            console.log("Cliente inserido: ");
            console.log(produtoInserido);
        }
    });  */


/*  cadastroBiblioteca.AutentificarUsuario(
    function(err, usuario) {
        console.log("Usuários Registrados: ");
        if(err) {
            console.log("Erro no sistema.");
            console.log(err);
        }
        else {
            console.log(usuario);
    
        }
    }
);  */

/*  cadastroBiblioteca.LivrosDisponiveis("Sim",
    function(err, livros) {
        console.log("Livros Registrados: ");
        if(err) {
            console.log("Erro no sistema.");
            console.log(err);
        }
        else {
            console.log(livros);

        }
    }
);  */


/*  cadastroBiblioteca.buscarPorAutor("Brasil Livros", 
    function(erro, livros) {
        console.log("BuscarPorAutor(Brasil Livros): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(livros);
        }
});  */

/* cadastroBiblioteca.deletar("Python para Iniciantes", function(erro, livros) {
    console.log("Livro deletado: ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(livros);
    }
});
 */


cadastroBiblioteca.atualizarRetiradas(27564, {ISBN: 27564, NOME: "Python para Iniciantes", AUTORES: "Matias Ferreira", EDITORA: "Brasil Livros", ANO: "2020", ALUGADO: "Sim", ALUGADOR: "147569"}, 
    function(erro, livros) {
        console.log("Atualizando: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(livros);
        }
});
