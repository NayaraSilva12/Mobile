/**
 * Variaveis
 * Listas
 * For
 * If
 * 
 * CreateElement - Cria um elemento na memória para usar no HTML
 * getElementById - Pega um elemento do HTML para manipular no JS
 */


// 17/02 acessar os dados do um input 
// salvar antes os dados da lista
// mostrar os dados dessa lista 
// funções > um bloco de codigos com um nome, para ser executado
// criar estilos


const nome =document.getElementById("name") 
const email =document.getElementById("email") 
const telefone =document.getElementById("fone") 

const listaEmails = []
const listaNomes = []
const listaTelefones = []



function salvar() {

    listaEmails.push(email.value);
    listaNomes.push(name.value);
    listaTelefones.push(telefone.value);
}


