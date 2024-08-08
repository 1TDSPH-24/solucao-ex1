

//Criando um array de alunos
let alunos = ["Leticia", "Mariana","Pedro","Felipe","Vitor","Enrico", "Israel"];

//Recuperando a lista ul que está no HTML de id 'lista'
let lista = document.getElementById('lista');


//Botão para adicionar item ao final da lista
document.getElementById("btnAdd").addEventListener("click", ()=>{
    let inputNome = document.getElementById("idNome");
    alunos.push(inputNome.value);
    renderizaLista();
    inputNome.value = "";
});

//Botão para colocar em ordem alfábetica a lista
document.getElementById("btnOrdenar").addEventListener("click", ()=>{
    alunos.sort();
    renderizaLista();
});

//Botão para reverter a ordem atual da lista.
document.getElementById("btnReverte").addEventListener("click", ()=>{
    alunos.reverse();
    renderizaLista();
});

//Botão para apagar itens do final da lista
document.getElementById("btnDeletar").addEventListener("click", ()=>{
    alunos.pop();
    renderizaLista();
});

function renderizaLista(){
    lista.innerHTML = "";
    //Preenchendo a lista com forEach
    alunos.forEach((aluno,indice)=>{
        //Criar um elemento li para ser adicionando a lista
        let elementoLi = document.createElement("li");
         //Adicionando texto ao elemento li
        elementoLi.textContent = (indice+1) +" - "+ aluno;

        //Criando o botao de autodestruição
        let botaoDeletar = document.createElement("button");
        botaoDeletar.textContent = " x ";
        //Inserindo o botão no li
        elementoLi.appendChild(botaoDeletar);
        

        //Inserindo o elemento li na lista
        lista.appendChild(elementoLi);
    });
}


renderizaLista();