let elementoP="";
let elementoB="";
let elementoS="";


function selecionarPrato(j) {
    elementoP = document.querySelector(".prato" + j);
    console.log(elementoP.children[3].innerText);
    const estaSelecionado = elementoP.classList.contains("selecionadoP");

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.prato' + i);
            op.classList.remove("selecionadoP");
        }
        elementoP.classList.add("selecionadoP");
        elementoP="selecionado";
    }
    else {
        elementoP.classList.remove("selecionadoP");
        elementoP="";
    }
    
    finalizar();
    return elementoP;



}
function selecionarBebida(j) {
    elementoB = document.querySelector(".bebida" + j);
    const estaSelecionado = elementoB.classList.contains("selecionadoB")

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.bebida' + i);
            op.classList.remove("selecionadoB");
        }
        elementoB.classList.add("selecionadoB");
        elementoB="selecionado";
    }
    else {
        elementoB.classList.remove("selecionadoB");
        elementoB="";
    }
    
    finalizar();
    return elementoB;
    

}
function selecionarSobre(j) {
    elementoS = document.querySelector(".sobre" + j);
    const estaSelecionado = elementoS.classList.contains("selecionadoS");

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.sobre' + i);
            op.classList.remove("selecionadoS");
        }
        elementoS.classList.add("selecionadoS");
        elementoS="selecionado";
    }
    else {
        elementoS.classList.remove("selecionadoS");
        elementoS="";
    }
    
    finalizar();
    return elementoS;
}

function finalizar(){
    if (elementoP !== "" & elementoB !== "" & elementoS !== "") {
        document.querySelector(".botao").disabled = false;
        document.querySelector(".botao").value = 'Fechar pedido';
        document.querySelector(".botao").classList.add('botaof');
    }
    else {
        document.querySelector(".botao").disabled = true;
        document.querySelector('.botao').value = "Selecione os 3 itens \npara fechar o pedido";
        document.querySelector('.botao').classList.remove('botaof');
    }
}
function enviarPedido(){

}